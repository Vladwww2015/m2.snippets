define([
    'jquery'
], function ($) {

    return function (originalWidget) {
        $.widget('mage.SwatchRenderer', originalWidget, {
            _EventListener: function () {

                var $widget = this;

                $widget.element.on('click', '.' + this.options.classes.optionClass, function () {
                    try {
                        var result = $widget._OnClick($(this), $widget);
                    } catch (e) {
                        console.log(e.message);
                    }
                    var swatch = $('[data-role="swatch-options"]').find('.swatch-option.selected');
                    if (swatch.length >= 1) {
                        window.location.hash = '';
                        if (window.location.hash.indexOf('/options') === -1) {
                            window.location.hash = '/options';
                        }
                        swatch.each(function (index, item) {
                            if (window.location.hash.indexOf(item.getAttribute('option-id')) === -1) {
                                window.location.hash = window.location.hash + '/' + item.getAttribute('option-id');
                            }
                        });
                    } else {
                        window.location.hash = '';
                    }

                    return result;
                });

                $widget.element.on('change', '.' + this.options.classes.selectClass, function () {
                    return $widget._OnChange($(this), $widget);
                });

                $widget.element.on('click', '.' + this.options.classes.moreButton, function (e) {
                    e.preventDefault();

                    return $widget._OnMoreClick($(this));
                });
            },
            _RenderControls: function () {
                var $widget = this,
                    container = this.element,
                    classes = this.options.classes,
                    chooseText = this.options.jsonConfig.chooseText;

                $widget.optionsMap = {};

                $.each(this.options.jsonConfig.attributes, function () {
                    var item = this,
                        options = $widget._RenderSwatchOptions(item),
                        select = $widget._RenderSwatchSelect(item, chooseText),
                        input = $widget._RenderFormInput(item),
                        label = '';

                    // Show only swatch controls
                    if ($widget.options.onlySwatches && !$widget.options.jsonSwatchConfig.hasOwnProperty(item.id)) {
                        return;
                    }

                    if ($widget.options.enableControlLabel) {
                        label +=
                            '<span class="' + classes.attributeLabelClass + '">' + item.label + '</span>' +
                            '<span class="' + classes.attributeSelectedOptionLabelClass + '"></span>';
                    }

                    if ($widget.productForm) {
                        $widget.productForm.append(input);
                        input = '';
                    }

                    // Create new control
                    container.append(
                        '<div class="' + classes.attributeClass + ' ' + item.code +
                        '" attribute-code="' + item.code +
                        '" attribute-id="' + item.id + '">' +
                        label +
                        '<div class="' + classes.attributeOptionsWrapper + ' clearfix">' +
                        options + select +
                        '</div>' + input +
                        '</div>'
                    );

                    $widget.optionsMap[item.id] = {};

                    // Aggregate options array to hash (key => value)
                    $.each(item.options, function () {
                        if (this.products.length > 0) {
                            $widget.optionsMap[item.id][this.id] = {
                                price: parseInt(
                                    $widget.options.jsonConfig.optionPrices[this.products[0]].finalPrice.amount,
                                    10
                                ),
                                products: this.products
                            };
                        }
                    });
                });

                // Connect Tooltip
                container
                    .find('[option-type="1"], [option-type="2"], [option-type="0"], [option-type="3"]')
                    .SwatchRendererTooltip();

                // Hide all elements below more button
                $('.' + classes.moreButton).nextAll().hide();

                // Handle events like click or change
                $widget._EventListener();

                // Rewind options
                $widget._Rewind(container);

                //Emulate click on all swatches from Request
                $widget._EmulateSelected($.parseQuery());
                $widget._EmulateSelected($widget._getSelectedAttributes());

                var options = window.location.hash.split('/');

                if (options.indexOf('options') != -1) {
                    var swatch = $('[data-role="swatch-options"]').find('.swatch-option');

                    options.forEach(function (optionId) {
                        swatch.each(function (index, item) {
                            if (item.getAttribute('option-id') === optionId) {
                                item.click();
                            }
                        });
                    });
                }
            }
        });

        return $.mage.SwatchRenderer;
    }
});
