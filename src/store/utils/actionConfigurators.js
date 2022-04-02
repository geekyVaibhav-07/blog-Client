import fieldActions from './../actions/fieldActions';

function actionConfigurators( params, dispatch) {
	const { fieldId } = params
	return function (e) {
		e.preventDefault();
		const eventType=  e._reactName;
		const actions = params[eventType] || [];
		actions.forEach(action => {
			const fieldAction = fieldActions[action];
			if (typeof fieldAction === 'function') {
				dispatch(fieldAction({
					eventType,
					fieldId,
					type: action,
					value: e.target.value,
				}))
			}
		})
	}
}

export default actionConfigurators