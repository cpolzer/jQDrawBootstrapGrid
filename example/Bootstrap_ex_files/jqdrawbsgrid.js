/**
 * Created with JetBrains WebStorm.
 * User: polzer
 * Date: 11.10.12
 * Time: 11:17
 *
 * Description:
 * A simple jQuery plugin to draw single grid lines.
 * Usually applied to the bootstrap "container":
 * jQuery(".container").drawBootstrapGrid();
 *
 * Default settings:
 *  {
 *    'columns':12,   //define how much columns to draw
 *     'singleColumnName': 'span1', //the css class name used in your bootstrap (just being caucious)
 *    'color':'lightgrey', //each columns background color
 *    'opacity':0.3,  //opacity of the rendered grid
 *    'buttonLabel': 'Show/Hide Grid', //the label for the button
 *    'startHidden':true, //if we want the grid to be shown initially
 *    'hiddenClassName': 'hidden' //the css class name used in your bootstrap to hide elements -> visibility: hidden
 *   }
 *
 * Fork me at github: https://github.com/plozi/jQDrawBootstrapGrid
 */

;(function ($) {

    $.fn.drawBootstrapGrid = function (options) {

        // Create some defaults, extending them with any options that were provided
        var settings = $.extend({
            'columns':12,
            'singleColumnName': 'span1',
            'color':'lightgrey',
            'opacity':0.4,
            'buttonLabel': 'Show/Hide Grid',
            'startHidden': true,
            'hiddenClassName': 'hidden'
        }, options)

        return this.each(function () {
            var $this = jQuery(this),
                i = 0,
                height = $this.innerHeight() + 'px',
                //leftmargin = jQuery('[class*=\'span\']').css('marginLeft'),
                $gridEl = jQuery('<div></div>').addClass('grid')
                    .css("position", "absolute")
                    //.css("margin-left", leftmargin)
                    .css("top", '0')
                    .css("z-index", '-2')

                $showHideButton = jQuery('<button></button>')
                    .addClass("btn btn-primary")
                    .css('position','fixed')
                    .css('top', '2em')
                    .css('right', '20px')
                    .css('margin','10px')
                    .css('z-index', '2000')
                    .text(settings.buttonLabel)
                    .click(function(){
                        jQuery($gridEl).toggleClass(settings.hiddenClassName);
                    })

            if(settings.startHidden){
                $gridEl.addClass(settings.hiddenClassName)
            }
            $this.append($gridEl)
            $this.append($showHideButton)

            while (i < settings.columns) {
                $gridEl.append(
                    jQuery('<div></div>')
                        .addClass(settings.singleColumnName)
                        .css('background', settings.color)
                        .css('opacity', settings.opacity)
                        .css('border-radius', '2px')
                        .css('height', height)
                        .css('z-index', '-2')
                )
                i++
            }
        });

    };

})(jQuery);