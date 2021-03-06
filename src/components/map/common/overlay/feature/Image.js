import SuperMap from '../../SuperMap';
import ShapeParameters from './ShapeParameters';

/**
 * @private
 * @class  SuperMap.Feature.ShapeParameters.Image
 * 图片参数对象。
 *
 * Inherits:
 *  - <SuperMap.Feature.ShapeParameters>
 */
export default class Image extends ShapeParameters {

    /**
     * APIProperty: x
     * {Number} 图片左上角横坐标。
     */
    x = null;

    /**
     * APIProperty: y
     * {Number} 左上角纵坐标。
     */
    y = null;

    /**
     * APIProperty: image
     * {String} 图片地址。
     */
    image = null;

    /**
     * APIProperty: width
     * {Number} 绘制到画布上的宽度，默认为图片高度。
     */
    width = null;

    /**
     * APIProperty: height
     * {Number} 绘制到画布上的高度，默认为图片高度。
     */
    height = null;

    /**
     * Property: sx
     * {Number} 从图片中裁剪的左上角横坐标。
     */
    sx = null;

    /**
     * Property: sy
     * {Number} 从图片中裁剪的左上角纵坐标。
     */
    sy = null;

    /**
     * Property: sWidth
     * {Number} 从图片中裁剪的宽度，默认为图片高度。
     */
    sWidth = null;

    /**
     * Property: sHeight
     * {Number} 绘制到画布上的高度，默认为图片高度。
     */
    sHeight = null;

    /**
     * Constructor: SuperMap.Feature.ShapeParameters.Image
     * 创建一个图片参数对象。
     *
     * Parameters:
     * x - {Number} 左上角横坐标，必设参数。
     * y - {Number} 左上角纵坐标，必设参数。
     * image - {String/Cavans} 图片地址或cavans对象，必设参数。
     * width - {Number} 绘制到画布上的宽度，默认为图片高度。
     * height - {Number} 绘制到画布上的高度，默认为图片高度。
     *
     * Returns:
     * {<SuperMap.Feature.ShapeParameters.Image>} 图片参数对象。
     */
    //     * sx - {Number} 从图片中裁剪的左上角横坐标。
    //     * sy - {Number} 从图片中裁剪的左上角纵坐标。
    //     * sWidth - {Number} 从图片中裁剪的宽度，默认为图片高度。
    //     * sHeight - {Number} 绘制到画布上的高度，默认为图片高度。
    constructor(x, y, image, width, height, sx, sy, sWidth, sHeight) {
        super(x, y, image, width, height, sx, sy, sWidth, sHeight);

        this.x = x;
        this.y = y;
        this.image = image;
        if (this.width) this.width = width;
        if (this.height) this.height = width;
        if (this.sx) this.sx = width;
        if (this.sy) this.sy = width;
        if (this.sWidth) this.sWidth = width;
        if (this.sHeight) this.sHeight = width;
    }


    /**
     * APIMethod: destroy
     * 销毁对象。
     */
    destroy() {
        this.x = null;
        this.y = null;
        this.image = null;
        this.width = null;
        this.height = null;
        this.sx = null;
        this.sy = null;
        this.sWidth = null;
        this.sHeight = null;
        super.destroy();
    }


    CLASS_NAME = "SuperMap.Feature.ShapeParameters.Image"
}
SuperMap.Feature.ShapeParameters.Image = Image;
