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
 * @file Introduction
 * @since 1.0.0
 * @author hw.shim@samsung.com
 */

define([
    'external/genetic/genetic',
    './Rectangular',
    './Shape'
], function (
    genetic,
    Rectangular,
    Shape
) {
    'use strict';

    /**
     * A Rect.
     * @constructor
     */
    function Rect() {
        Shape.apply(this, arguments);
    }

    var proto = genetic.mixin(Rectangular.prototype, {

        /**
         * Returns tagName for this Widget's element.
         * @return {string}
         */
        getTagName: function () {
            return 'rect';
        },

        /**
         * For convenience, this tells position for
         * x,y,w,h of this Rectangle.
         * @return {string}
         */
        toString: function () {
            var bounds = this.getBounds();
            return Shape.prototype.toString.call(this) + 
                    '(' + bounds.x + ',' + bounds.y + ',' +
                            bounds.w + ',' + bounds.h + ')';
        }
    });

    genetic.inherits(Rect, Shape, proto);

    return Rect;
});