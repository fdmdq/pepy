/*!
 *                      2022
 * All Rights Reserved for Oziku Technologies LLC
 *            https://www.oziku.tech/
 */

var _biggerTextOptions=[{value:"120%",iconScale:1.2,iconPath:"../res/icons/format_size.svg",defaultIcon:!0},{value:"130%",iconScale:1.4,iconPath:"../res/icons/format_size.svg"},{value:"150%",iconScale:1.6,iconPath:"../res/icons/format_size.svg"}],_readingSpeedOptions=[{name:chrome.i18n.getMessage("speed_normal"),value:"1",iconScale:1,iconPath:"../res/icons/volume-3.png",defaultIcon:!0},{name:chrome.i18n.getMessage("speed_slow"),value:"2",iconScale:1,iconPath:"../res/icons/volume-3.png"},{name:chrome.i18n.getMessage("speed_fast"),value:"3",iconScale:1,iconPath:"../res/icons/volume-3.png"}],_readingVoiceOptions=[{name:chrome.i18n.getMessage("voice_male"),value:"1",iconScale:1,iconPath:"../res/icons/voice.png",defaultIcon:!0},{name:chrome.i18n.getMessage("voice_female"),value:"2",iconScale:1,iconPath:"../res/icons/voice.png"}],_alignTextOptions=[{name:chrome.i18n.getMessage("align_left"),value:"left",iconScale:1,iconPath:"../res/icons/format_align_left.png"},{name:chrome.i18n.getMessage("align_center"),value:"center",iconScale:1,iconPath:"../res/icons/format_align_center.png",defaultIcon:!0},{name:chrome.i18n.getMessage("align_right"),value:"right",iconScale:1,iconPath:"../res/icons/format_align_right.png"},{name:chrome.i18n.getMessage("align_justify"),value:"justify",iconScale:1,iconPath:"../res/icons/format_align_justify.png"}],_lineSpacingOptions=["2","2.5","3"],_wordSpacingOptions=["0.75em","1em","1.25em"],_letterSpacingOptions=["0.25em","0.5em","0.75em"],_maskModeOptions=["normal","reversed"],_biggerCursorOptions=[{value:"black",iconScale:1,iconPath:"../res/icons/cursor_black.png",defaultIcon:!0},{value:"white",iconScale:1,iconPath:"../res/icons/cursor_white.png"}],_contrastOptions=[{name:chrome.i18n.getMessage("light_contrast"),value:"light",iconScale:1,iconPath:"../res/icons/light_contrast.png"},{name:chrome.i18n.getMessage("dark_contrast"),value:"dark",iconScale:1,iconPath:"../res/icons/dark_contrast.png"},{name:chrome.i18n.getMessage("invert_colors"),value:"invert",iconScale:1,iconPath:"../res/icons/invert_colors.png"}],_saturationOptions=[{name:chrome.i18n.getMessage("low_saturation"),value:"low",iconScale:1,iconPath:"../res/icons/low_saturation.png"},{name:chrome.i18n.getMessage("high_saturation"),value:"high",iconScale:1,iconPath:"../res/icons/high_saturation.png",defaultIcon:!0},{name:chrome.i18n.getMessage("desaturate"),value:"desaturate",iconScale:1,iconPath:"../res/icons/low_saturation.png"}],_fontColors=["#000000","#ffffff","#e02b20","#e09900","#eef002","#7cda24","#0671c3","#8300e9"],_maskColors=["#000000","#e02b20","#e09900","#eef002","#7cda24","#0671c3","#8300e9"],_screenTintColors=["#000000","#e02b20","#e09900","#eef002","#7cda24","#0671c3","#8300e9"],_fontFamilyOptions=[{name:"Arial",fontFamily:"Arial"},{name:"Calibri",fontFamily:"Calibri"},{name:"CenturyGothic",fontFamily:"CenturyGothic"},{name:"ComicSans",fontFamily:"Comic Sans MS"},{name:"Courier",fontFamily:"Courier"},{name:"Helvetica",fontFamily:"Helvetica"},{name:"OpenSans",fontFamily:"Open Sans"},{name:"OpenDyslexic",fontFamily:"OpenDyslexic"},{name:"Tahoma",fontFamily:"Tahoma"},{name:"Verdana",fontFamily:"Verdana"}];const htmlFontFamily='\n  <p style="--font-family:[[FONT_FAMILY]]">[[NAME]]</p>\n',htmlPositionLine='\n  <div class="position-line" data-value="[[VALUE]]">\n    <div></div>\n  </div>\n',htmlPositionLineWithIconInfo='\n  <div class="position-line .icon-info" data-value="[[VALUE]]" data-icon-url="url([[ICON_PATH]])"\n    data-icon-scale="[[ICON_SCALE]]">\n    <div></div>\n  </div>\n',htmlColorPick='\n  <div data-value="[[VALUE]]" style="--bg-color:[[VALUE]]"></div>\n';var initFonts=(e,n)=>{(e=e.find(".fonts-container")).empty(),n.forEach((n=>{e.append(htmlFontFamily.replace("[[FONT_FAMILY]]",n.fontFamily).replace("[[NAME]]",n.name))}))},initPositionLines=(e,n)=>{$parent=e,(e=e.find(".position-counter")).empty(),n.forEach((n=>{"string"==typeof n?e.append(htmlPositionLine.replaceAll("[[VALUE]]",n)):(e.append(htmlPositionLineWithIconInfo.replaceAll("[[VALUE]]",n.value).replaceAll("[[ICON_PATH]]",n.iconPath).replaceAll("[[ICON_SCALE]]",n.iconScale)),n.defaultIcon&&$parent.css("--default-icon","url("+n.iconPath+")"))}))},initColorPick=(e,n)=>{(e=e.find(".grid-colors")).find(".grid-colors").empty(),n.forEach((n=>{e.append(htmlColorPick.replaceAll("[[VALUE]]",n))}))},showSelectionPositions=(e,n,a,i,o)=>{n.find(".selected").removeClass("selected");const t=()=>{n.removeClass("selected"),o?.removeClass("selected"),n.css({"--icon-url":"","--icon-scale":""})};if(Array.isArray(a)&&a.length>0){let s=i=i.toString();if("string"!=typeof a[0]&&(s=a.find((e=>e.value.toString()===s))),"string"==typeof s&&a.includes(i)||"string"!=typeof s&&s){n.addClass("selected"),o?.addClass("selected");n.find(".position-line").each(((a,i)=>{(i=e(i)).addClass("selected");let o=!1;return"string"==typeof s&&i.attr("data-value")===s?o=!0:"string"!=typeof s&&i.attr("data-value")===s.value.toString()&&(o=!0,n.find(".selected-option").text(s.name),n.css("--icon-url","url("+s.iconPath+")"),n.css("--icon-scale",s.iconScale)),!o}))}else t()}else t()},showColorSelected=(e,n,a,i)=>{n.find(".selected").removeClass("selected"),a?(n.find(`.grid-colors > [data-value="${a}"]`).addClass("selected"),n.addClass("selected"),i?.addClass("selected")):(n.removeClass("selected"),i?.removeClass("selected"))},showFontFamilySelected=(e,n,a)=>{n.removeClass("selected"),n.find(".selected").removeClass("selected"),n.find(".fonts-container > p").each(((i,o)=>{if((o=e(o)).css("--font-family")===a)return o.addClass("selected"),n.addClass("selected"),!1}))},getNextSelectionPositionFor=e=>e.hasClass("selected")?e.find(".position-line").length===e.find(".position-line.selected").length?"":e.find(".position-line.selected").last().next().attr("data-value"):e.find(".position-line").first().attr("data-value");function updateConfigValue(e,n,a,i,o){e.get(["config"],(t=>{t.config=t.config??{},!o&&t.config[n]===a&&i&&(a=""),t.config[n]=o?!t.config[n]:a,e.set(t)}))}function isChildOf(e,n){return e=$(e),n=$(n),!!e.is(n)||e.parents().index(n)>=0}function delay(e){return new Promise((n=>setTimeout(n,e)))}function smoothScrollTo(e,n=!1){try{(n?$(e).last():$(e))[0].scrollIntoView({behavior:"smooth",block:"nearest"})}catch(e){}}