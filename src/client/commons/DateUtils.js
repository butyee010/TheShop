import moment from 'moment';
import ObjectUtils from './ObjectUtils';

let utils = {

    dateFormats: {
        DD_MM_YYYY_kk_mm_ss: 'DD-MM-YYYY kk:mm:ss'
    },

    toFormat: function(format, date) {
        return ObjectUtils.varIsNotBlank(date) ? moment(date).format(format) : moment().format(format);
    }
};

export default utils;