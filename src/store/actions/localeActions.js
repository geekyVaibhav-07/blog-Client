import constants from '../../constants/constants';
import localeService from '../../services/localeService';

const updateLocale = (selectedLocale) => {
	return async function(dispatch) {
		const { locale, getContent } = await localeService.contentInitializer(selectedLocale);
		dispatch({
			type: constants.UPDATE_LOCALE,
			payload: {
				locale: locale,
				getContent: getContent
			}
		})
	}

}



export default {
	updateLocale
};