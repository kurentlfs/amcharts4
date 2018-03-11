/**
 * Translation file
 * Locale: en (default international English)
 *
 * Use this file as a template to create translations. Leave the key part in
 * English intact. Fill the value with a translation.
 *
 * Save the file as language_LOCALE, i.e. en_GB, fr_FR, etc.
 * @type {ILocale}
 */
export default {
    // number formatter related
    "_decimalSeparator": ".",
    "_thousandSeparator": ",",
    // Default date formats for various periods
    "_date_millisecond": "mm:ss SSS",
    "_date_second": "HH:mm:ss a",
    "_date_minute": "HH:mm",
    "_date_hour": "HH:mm",
    "_date_day": "MMM dd",
    "_date_week": "ww",
    "_date_month": "MMM",
    "_date_year": "yyyy",
    // Default duration formats for various base units
    "_duration_millisecond": "SSS",
    "_duration_second": "ss",
    "_duration_minute": "mm",
    "_duration_hour": "hh",
    "_duration_day": "dd",
    "_duration_week": "ww",
    "_duration_month": "MM",
    "_duration_year": "yyyy",
    // Era
    "_era_ad": "AD",
    "_era_bc": "BC",
    // Period
    "A": "",
    "P": "",
    "AM": "",
    "PM": "",
    "A.M.": "",
    "P.M.": "",
    // Dates
    "January": "",
    "February": "",
    "March": "",
    "April": "",
    "May": "",
    "June": "",
    "July": "",
    "August": "",
    "September": "",
    "October": "",
    "November": "",
    "December": "",
    "Jan": "",
    "Feb": "",
    "Mar": "",
    "Apr": "",
    "May(short)": "May",
    "Jun": "",
    "Jul": "",
    "Aug": "",
    "Sep": "",
    "Oct": "",
    "Nov": "",
    "Dec": "",
    "Sunday": "",
    "Monday": "",
    "Tuesday": "",
    "Wednesday": "",
    "Thursday": "",
    "Friday": "",
    "Saturday": "",
    "Sun": "",
    "Mon": "",
    "Tue": "",
    "Wed": "",
    "Thu": "",
    "Fri": "",
    "Sat": "",
    // ordinal function
    "_dateOrd": function (day) {
        var res = "th";
        if ((day < 11) || (day > 13)) {
            switch (day % 10) {
                case 1:
                    res = "st";
                    break;
                case 2:
                    res = "nd";
                    break;
                case 3:
                    res = "rd";
                    break;
            }
        }
        return res;
    },
    // Chart elements
    "Zoom Out": "",
    "Play": "",
    "Stop": "",
    "Legend": "",
    "Click, tap or press ENTER to toggle": "",
    "Loading": "",
    "Home": "",
    // Chart types
    "Chart": "",
    "Serial chart": "",
    "X/Y chart": "",
    "Pie chart": "",
    "Gauge chart": "",
    "Radar chart": "",
    "Sankey diagram": "",
    "TreeMap chart": "",
    // Series types
    "Series": "",
    "Candlestick Series": "",
    "Column Series": "",
    "Line Series": "",
    "Pie Slice Series": "",
    "X/Y Series": "",
    // Map-related
    "Map": "",
    "Press ENTER to zoom in": "",
    "Press ENTER to zoom out": "",
    "Use arrow keys to zoom in and out": "",
    "Use plus and minus keys on your keyboard to zoom in and out": "",
    // Export-related
    "Export": "",
    "Image": "",
    "Data": "",
    "Print": "",
    "Click, tap or press ENTER to open": "",
    "Click, tap or press ENTER to print.": "",
    "Click, tap or press ENTER to export as %1.": "",
    'To save the image, right-click this link and choose "Save picture as..."': "",
    'To save the image, right-click thumbnail on the left and choose "Save picture as..."': "",
    "(Press ESC to close this message)": "",
    "Image Export Complete": "",
    "Export operation took longer than expected. Something might have gone wrong.": "",
    "Saved from": "",
    "PNG": "",
    "JPG": "",
    "GIF": "",
    "SVG": "",
    "PDF": "",
    "JSON": "",
    "CSV": "",
    "XLSX": "",
    // Scrollbar-related
    "Use TAB to select grip buttons or left and right arrows to change selection": "",
    "Use left and right arrows to move selection": "",
    "Use left and right arrows to move left selection": "",
    "Use left and right arrows to move right selection": "",
    "Use TAB select grip buttons or up and down arrows to change selection": "",
    "Use up and down arrows to move selection": "",
    "Use up and down arrows to move lower selection": "",
    "Use up and down arrows to move upper selection": "",
    "From %1 to %2": "",
    "From %1": "",
    "To %1": "",
    // Data loader-related
    "No parser available for file: %1": "",
    "Error parsing file: %1": "",
    "Unable to load file: %1": "",
    "Invalid date": "",
};
//# sourceMappingURL=en.js.map