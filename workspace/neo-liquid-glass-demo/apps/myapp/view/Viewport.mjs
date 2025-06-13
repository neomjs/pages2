import BaseViewport   from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';
import GlassComponent from './GlassComponent.mjs';

/**
 * @class MyApp.view.Viewport
 * @extends Neo.container.Viewport
 */
class Viewport extends BaseViewport {
    static config = {
        /**
         * @member {String} className='MyApp.view.Viewport'
         * @protected
         */
        className: 'MyApp.view.Viewport',
        /*
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'fit'},
        /**
         * @member {Object[]} items
         */
        items: [{
            module: GlassComponent
        }]
    }
}

export default Neo.setupClass(Viewport);
