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
    'external/dom/dom',
    'external/genetic/genetic',
    './SvgWidget'
], function (
    dom,
    genetic,
    SvgWidget
) {
    'use strict';

    /**
     * A Rectangular.
     * @constructor
     */
    function Rectangular() {
        SvgWidget.apply(this, arguments);
    }

    genetic.inherits(Rectangular, SvgWidget, {

        /**
         * @see Widget#_drawWidget
         * @param {GraphicContext} context
         */
        _drawWidget: function (context) {
            this.desc('_drawWidget', context, undefined, 'green');
            var bounds = this.bounds();
            var svg = this.getElement();
            dom.setAttributes(svg, {
                'x': bounds.x,
                'y': bounds.y,
                'width': bounds.w,
                'height': bounds.h
            });
        },
    });

    return Rectangular;
});
