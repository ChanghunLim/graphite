/*
 * Copyright (c) 2012-2015 S-Core Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Widget implementation for Html element.
 * @since 1.0.0
 * @author hw.shim@samsung.com
 */

define([
    'external/dom/dom',
    'external/genetic/genetic',
    'graphite/view/geometry/Spaces',
    'graphite/view/layout/XYLayout',
    'graphite/view/widget/dom/DomWidget'
], function (
    dom,
    genetic,
    Spaces,
    XYLayout,
    DomWidget
) {
    'use strict';

    /**
     * A HtmlWidget.
     * @constructor
     */
    function HtmlWidget() {
        DomWidget.apply(this, arguments);
        this._padding = new Spaces(0, 0, 0, 0);
    }

    genetic.inherits(HtmlWidget, DomWidget, {

        /**
         * Creates then returns HTMLElement for this Widget.
         * @see DomWidget#_createElement
         * @return {HTMLElement}
         */
        _createElement: function () {
            return dom.makeElement(this.getTagName());
        },

        /**
         * Sets position CSS property for this Widget's element.
         * @param {string} property - static, relative, absolute, fixed
         */
        setPosition: function (property) {
            dom.setStyles(this.getElement(), {
                'position': property
            });
        },

        /**
         * Returns true if this Widget uses local coordinates.
         * This means its children are placed relative to
         * this Widget's top-left corner.
         * @return {boolean}
         */
        useLocalCoordinates: function () {
            this.desc('useLocalCoordinates', [], true);
            return true;
        },

        /**
         * @param {Layout} layout
         * @override
         */
        setLayout: function (layout) {
            this.desc('setLayout', arguments);
            DomWidget.prototype.setLayout.call(this, layout);
            if (manager instanceof XYLayout) {
                this.setPosition('absolute');
            }
        },

        /**
         * Sets this widget's background color.
         * @see Widget#setBgColor
         * @param {number} r - 0 ~ 255
         * @param {number} g - 0 ~ 255
         * @param {number} b - 0 ~ 255
         * @param {number} a - 0 ~ 1.0
         *//**
         * @param {string} colorName - 'skyblue', 'transparent'
         *//**
         * @param {string} hexCode - '#ff0', '#ffff00', 'ff0', 'ffff00'
         *//**
         * @param {Color} color
         */
        setBgColor: function (color) {
            DomWidget.prototype.setBgColor.call(this, color);
            dom.setStyles(this.getElement(), {
                'background-color': color
            });
        },

        /**
         * Sets this widget's padding value.
         * @param {number} top
         * @param {number} right
         * @param {number} bottom
         * @param {number} left
         *//**
         * @param {Spaces} spaces
         *//**
         * @param {number} number - If same values for each sides
         */
        setPadding: function () {
            this.desc('setPadding', arguments);
            this._padding = genetic.getInstanceOf(Spaces, arguments);
        },

        /**
         * Returns this widget's padding value.
         * @return {Spaces}
         */
        getPadding: function () {
            return this._padding;
        },

        /**
         * Returns compensated bounds for border.
         * @return {Rectangle}
         * @protected
         */
        _getRevisedBounds: function () {
            var border = this.getBorderWidth();
            var r = new Rectangle(this.getBounds());
            var hTop, hRight, hBottom, hLeft;
            if (!border.isEmpty()) {
                hTop = border.top/2,
                hRight = border.right/2;
                hBottom = border.bottom/2;
                hLeft = border.left/2;
                r.x += hLeft;
                r.y += hTop;
                r.w -= hLeft + hRight;
                r.h -= hTop + hBottom;
            }
            return r;
        },
    });

    return HtmlWidget;
});
