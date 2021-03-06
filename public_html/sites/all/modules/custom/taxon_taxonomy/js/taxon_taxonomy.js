/*
	File name: taxon_taxonomy.js
	Version:   0.9
	
	Description:
	taxon_taxonomy is the proxy to allow Drupal to communicate 
	with the Taxon system.
*/

/*
	Copyright 2012 by Halibut ApS.
	Visit us at www.halibut.dk / www.taxon.dk.
	
	taxon_taxonomy is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	taxon_taxonomy is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with taxon_taxonomy. If not, see <http://www.gnu.org/licenses/>.
	
	For more information read the README.txt file in the root directory.
*/
(function ($) {
  Drupal.behaviors.overlay_alter = {
    attach: function (context)
    {
      // Some global settings
      var taxonomy_name = Drupal.settings.taxon_taxonomy.taxonomy_name;
      var taxonomy_tag_name = Drupal.settings.taxon_taxonomy.field_name;
      var taxonomy_selected_image = Drupal.settings.taxon_taxonomy.selected_image;
      var taxonomy_not_selected_image = Drupal.settings.taxon_taxonomy.not_selected_image;
      var taxonomy_waiticon_image = Drupal.settings.taxon_taxonomy.wait_image;
      var taxonomy_button_text = Drupal.settings.taxon_taxonomy.button_text;
      var taxonomy_button_text_wait = Drupal.settings.taxon_taxonomy.button_text_wait;
      var taxonomy_ckeditor_field = Drupal.settings.taxon_taxonomy.ckeditor_field;

      // Insert the button, but only once
      var test = $('div').find('#taxon-classify-button');
			
      if(test.length == 0)
      {
        $(taxonomy_tag_name).after("<div class='description'><br>Knappen herunder foreslår KLE opmærkning på baggrund af teksten i indholdsfeltet.<br>Funktionen kan indtil videre kun foreslå emner inden for hovedgrupperne 02, 15, 23, 28, 29 og 32.<br>Hvis du ønsker at anvende et eller flere af de foreslåede emner, skal du trykke på dem med musen, så de bliver flyttet op i KL Emneord feltet ovenfor.<br><input style = 'margin-top:10px;' id = 'taxon-classify-button' class = 'form-submit ajax-processed' type='button' value='" + taxonomy_button_text +"'><br><br></div>" );
      }
      // Get the text from the textarea
      $('div').find('#taxon-classify-button').click(function()
      {
        $('div').find('#taxon-classify-button').attr('value', taxonomy_button_text_wait);
        $('div').find('#taxon-classify-button').after("<img id = 'taxon-wait-cursor' src = '" + taxonomy_waiticon_image + "'>" );
        $("#taxon-results").remove();

        CKEDITOR.config.entities = false;
        CKEDITOR.config.entities_latin = false;
        var text = CKEDITOR.instances[taxonomy_ckeditor_field].getData();
				
        $.ajaxSetup({
          async:false
        });
				
        $.post("/taxon-taxonomy", {
          taxonomy: taxonomy_name,
          text: text
        }, function(data) {

          $('#taxon-classify-button').before("<div id = 'taxon-results'> </div>" );

          var classids_string = $(taxonomy_tag_name).val();
          //Propeople hack change /\s*,\s*/ with /\s*;\s*/
          var classids = classids_string.split(/\s*;\s*/);
					
          var lines = data.split("\n");
										
          for(line in lines)
          {
            if(lines[line] != "")
            {
              if(jQuery.inArray(lines[line], classids) != -1)
              {
                // The classid is selected in the dropdown
                $('#taxon-results').append("<div class = 'taxon-results-result'><span class = 'taxon-state'><img src = '" +taxonomy_selected_image + "'></span><input style = 'margin-top:10px;' id = 'taxon-classify-" + line + "' class = 'taxon-result' type='button' value='" + lines[line] + "'></div>" );
              }
              else
              {
                // The classid is NOT selected in the dropdown
                $('#taxon-results').append("<div class = 'taxon-results-result'><span class = 'taxon-state'><img src = '" + taxonomy_not_selected_image + "'></span><input style = 'margin-top:10px;' id = 'taxon-classify-" + line + "' class = 'taxon-result' type='button' value='" + lines[line] + "'></div>" );
              }
            }
          }
					
          $('.taxon-result').click(function()
          {
            if($(this).siblings("span").children("img").attr('src') != taxonomy_selected_image)
            {
              // Add the class
              $(this).siblings("span").children("img").attr('src', taxonomy_selected_image);
              var classid = $(this).val();
							
              var classes = $(taxonomy_tag_name).val();
							
              if(classes == "")
              {
                $(taxonomy_tag_name).val(classid);
              }
              else
              { 
                //Propeople hach - change "," with ";"
                $(taxonomy_tag_name).val(classes + "; " + classid);
              }
            }
            else
            {
              // Remove the class
              $(this).siblings("span").children("img").attr('src', taxonomy_not_selected_image);

              var classid = $(this).val();
							
              var classes = $(taxonomy_tag_name).val();

              // Start
               //Propeople hach  change " *\,? *"  with " *\;? *"
              var re = new RegExp("^[ ]*" + classid + " *\;? *");
              classes = classes.replace(re, "");

              // Middle
              var re = new RegExp(" *, *" + classid + " *\, *");
              //Propeople hach  change "," with ";"
              classes = classes.replace(re, ";");

              // End
               //Propeople hach  change " *, *"  with " *; *" 
              var re = new RegExp(" *; *" + classid + " *$");
              classes = classes.replace(re, "");

              $(taxonomy_tag_name).val(jQuery.trim(classes));
            }
          });

          $('.taxon-state').click(function()
          {
            if($(this).children("img").attr('src') != taxonomy_selected_image)
            {
              // Add the class
              $(this).children("img").attr('src', taxonomy_selected_image);
              var classid = $(this).siblings("input").val();
							
              var classes = $(taxonomy_tag_name).val();
							
              if(classes == "")
              {
                $(taxonomy_tag_name).val(classid);
              }
              else
              { 
                //Propeople hach - change "," with ";"
                $(taxonomy_tag_name).val(classes + "; " + classid);
              }
            }
            else
            {
              // Remove the class
              $(this).children("img").attr('src', taxonomy_not_selected_image);

              var classid = $(this).siblings("input").val();
							
              var classes = $(taxonomy_tag_name).val();

              // Start
              //Propeople hach - change "\s*\,?\s*" with "\s*\;?\s*"
              var re = new RegExp("^\s*" + classid + "\s*\;?\s*");
              var classes = classes.replace(re, "");

              // Middle
              //Propeople hach - change "\s*,\s*" with "\s*;\s*"
              var re = new RegExp("\s*;\s*" + classid + "\s*\;\s*");
              var classes = classes.replace(re, ";");

              // End
              //Propeople hach - change "\s*,\s*" with "\s*;\s*"
              var re = new RegExp("\s*;\s*" + classid + "$");
              var classes = classes.replace(re, "");

              $(taxonomy_tag_name).val(classes);
            }
          });
        });
	
        $('div').find('#taxon-classify-button').attr('value', taxonomy_button_text);
        $('#taxon-wait-cursor').remove();
      });
			
      $(taxonomy_tag_name).change(function () {
        var classids_string = $(this).val();
        //Propeople hach - change "/\s*,\s*/" with "/\s*;\s*/"
        var classids = classids_string.split(/\s*;\s*/);
				
        $("#taxon-results input").each(function () {
          if(jQuery.inArray($(this).val(), classids) != -1)
          {
            $(this).siblings("span").children("img").attr('src', taxonomy_selected_image);
          }
          else
          {
            $(this).siblings("span").children("img").attr('src', taxonomy_not_selected_image);
          }
        });
      });

    }
  };
})(jQuery);


