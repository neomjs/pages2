import Component from '../../../node_modules/neo.mjs/src/component/Base.mjs';
import VDomUtil  from '../../../node_modules/neo.mjs/src/util/VDom.mjs';

// Could get moved as static configs into the class
const
    MASK_WIDTH            = 720,
    MASK_HEIGHT           = 400,
    MASK_RADIUS           = 28,
    VIEWBOX_WIDTH         = 1920,
    VIEWBOX_HEIGHT        = 1080,
    SPEED_X               = 75, // Speed in pixels per second
    SPEED_Y               = 75,
    OUTER_SHADOW_BLUR     = 32,
    BACKGROUND_IMAGE_PATH = './resources/images/room.jpg';

/**
 * @class MyApp.view.GlassComponent
 * @extends Neo.component.Base
 */
class GlassComponent extends Component {
    static config = {
        /**
         * @member {String} className='MyApp.view.GlassComponent'
         * @protected
         */
        className: 'MyApp.view.GlassComponent',
        /**
         * @member {String[]} baseCls=['neo-svg-glass']
         * @protected
         */
        baseCls: ['neo-svg-glass'],
        /**
         * The position of the mask.
         * @member {Object} maskPosition_={x:0,y:0}
         */
        maskPosition_: {x: 0, y: 0},

        /**
         * @property {Object} _vdom
         */
        vdom:
        {tag: 'svg', viewBox: '0 0 1920 1080', preserveAspectRatio: 'xMidYMid meet', cn: [
            {tag: 'defs', cn: [
                // Glass distortion filter
                {tag: 'filter', id: 'glass-distortion', x: '0', y: '0', width: '100%', height: '100%', cn: [
                    {tag: 'feTurbulence', type: 'fractalNoise', numOctaves: '2', seed: '92', result: 'noise', cn: [
                        {tag: 'animate', id: 'noiseAnimate', attributeName: 'baseFrequency', values: '0.002;.008;0.002', from: '0', to: '8', dur: '10s', repeatCount: 'indefinite'}
                    ]},
                    {tag: 'feGaussianBlur', in: 'noise', stdDeviation: '2', result: 'blurred'},
                    {tag: 'feDisplacementMap', in: 'SourceGraphic', in2: 'blurred', scale: '77', xChannelSelector: 'R', yChannelSelector: 'G'}
                ]},
                // Shadow filter
                {tag: 'filter', id: 'shadow', x: '-50%', y: '-50%', width: '200%', height: '200%', cn: [
                    {tag: 'feDropShadow', dx: '-6', dy: '-6', stdDeviation: OUTER_SHADOW_BLUR / 8, floodColor: 'rgba(255,255,255,1)'},
                    {tag: 'feDropShadow', dx: '6',  dy: '6',  stdDeviation: OUTER_SHADOW_BLUR / 8, floodColor: 'rgba(0,0,0,0.2)'}
                ]},
                // Animated rectangular mask with border radius
                {tag: 'mask', id: 'glass-mask', cn: [
                    {tag: 'rect', flag: 'mask-rect', width: MASK_WIDTH, height: MASK_HEIGHT, rx: MASK_RADIUS, ry: MASK_RADIUS, fill: 'white'}
                ]}
            ]},
            // Background image 1
            {tag: 'image', href: BACKGROUND_IMAGE_PATH, width: '1920', height: '1080', preserveAspectRatio: 'xMidYMid meet'},
            // Example foreignObject with a button
            {tag: 'foreignObject', x: '600', y: '200', width: '720', height: '400', cn: [
                {tag: 'button', html: 'Click Me'}
            ]},
            // Masked background image
            {tag: 'image', href: BACKGROUND_IMAGE_PATH, width: '1920', height: '1080', preserveAspectRatio: 'xMidYMid meet', filter: 'url(#glass-distortion)', mask: 'url(#glass-mask)'},
            // Masked foreignObject with a button
            {tag: 'foreignObject', x: '600', y: '200', width: '720', height: '400', filter: 'url(#glass-distortion)', mask: 'url(#glass-mask)', cn: [
                {tag: 'button', cls: ['custom-button'], html: 'Click Me'}
            ]},
            // Shadow rectangle behind the glass area
            {tag: 'rect', flag: 'shadow-rect', width: MASK_WIDTH, height: MASK_HEIGHT, rx: MASK_RADIUS, ry: MASK_RADIUS, fill: 'white', opacity: '0.2', filter: 'url(#shadow)'}
        ]}
    }

    // Private instance properties for animation state
    #animationFrameId = 0;
    #animationPos     = { x: 0, y: 0, dx: SPEED_X, dy: SPEED_Y };
    #lastTime         = performance.now();

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        me.addDomListeners({
            click   : me.onCustomButtonClick,
            delegate: 'custom-button',
            scope   : me
        })
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        let me = this;

        if (oldValue !== undefined) {
            if (value) {
                me.#animationFrameId = globalThis.requestAnimationFrame(me.animate.bind(me))
            } else if (this.#animationFrameId) {
                globalThis.cancelAnimationFrame(me.#animationFrameId)
            }
        }
    }

    /**
     * Triggered after the maskPosition config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetMaskPosition(value, oldValue) {
        let me         = this,
            {vdom}     = me,
            maskRect   = VDomUtil.getByFlag(vdom, 'mask-rect'),
            shadowRect = VDomUtil.getByFlag(vdom, 'shadow-rect');

        Object.assign(maskRect,   value);
        Object.assign(shadowRect, value);

        me.update()
    }

    /**
     * The animation loop method.
     * @param {Number} now
     */
    animate(now) {
        const
            me      = this,
            elapsed = (now - me.#lastTime) / 1000; // seconds

        me.#lastTime = now;

        let { x, y, dx, dy } = me.#animationPos;
        x += dx * elapsed;
        y += dy * elapsed;

        // Bounce off edges
        if (x < 0) {
            x = 0;
            dx *= -1;
        }
        if (x > VIEWBOX_WIDTH - MASK_WIDTH) {
            x = VIEWBOX_WIDTH - MASK_WIDTH;
            dx *= -1;
        }
        if (y < 0) {
            y = 0;
            dy *= -1;
        }
        if (y > VIEWBOX_HEIGHT - MASK_HEIGHT) {
            y = VIEWBOX_HEIGHT - MASK_HEIGHT;
            dy *= -1;
        }

        me.#animationPos = { x, y, dx, dy };

        me.maskPosition= { x, y };

        me.#animationFrameId = self.requestAnimationFrame(me.animate.bind(me))
    }

    /**
     * @param {Object} data
     */
    onCustomButtonClick(data) {
        Neo.Main.alert({message: 'Button clicked!'})
    }
}

export default Neo.setupClass(GlassComponent);
