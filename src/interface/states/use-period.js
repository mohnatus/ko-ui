import { observable, toJS } from 'knockout';

export function usePeriod(fromDate = null, toDate = null) {
	let from = observable(fromDate || null);
	let to = observable(toDate || null);

	function setDate (newDate) {
		if (!toJS(from)) {
			from(newDate);
		} else if (!toJS(to)) {
			if (+newDate < toJS(from)) {
				from(newDate);
			} else {
				to(newDate);
			}
		} else {
			from(newDate);
			to(null);
		}
	};

  return {
    from, to, setDate
  }
}
