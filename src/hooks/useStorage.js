



// function serializeJSON(value, hookName) {
//     try {
//     	return JSON.stringify(value);
//     } catch (error) {
//     	throw new Error(`hooks ${hookName}: Failed to serialize the value`);
//     }
// }
  
// function deserializeJSON(value) {
//     try {
//     	return JSON.parse(value);
//     } catch {
//     	return value;
//     }
// }


// export function createStorage(type, hookName) {
// 	const eventName = type === 'localStorage' ? 'mantine-local-storage' : 'mantine-session-storage';
  
// 	return function useStorage({
// 	  key,
// 	  defaultValue = undefined,
// 	  getInitialValueInEffect = true,
// 	  deserialize = deserializeJSON,
// 	  serialize = (value: T) => serializeJSON(value, hookName),
// 	}: IStorageProperties<T>) {
// 	  const readStorageValue = useCallback(
// 		(skipStorage?: boolean): T => {
// 		  if (
// 			typeof window === 'undefined' ||
// 			!(type in window) ||
// 			window[type] === null ||
// 			skipStorage
// 		  ) {
// 			return defaultValue as T;
// 		  }
  
// 		  const storageValue = window[type].getItem(key);
  
// 		  return storageValue !== null ? deserialize(storageValue) : (defaultValue as T);
// 		},
// 		[key, defaultValue]
// 	  );
  
// 	  const [value, setValue] = useState<T>(readStorageValue(getInitialValueInEffect));
  
// 	  const setStorageValue = useCallback( (val) => {
// 		  if (val instanceof Function) {
// 			setValue((current) => {
// 			  const result = val(current);
// 			  window[type].setItem(key, serialize(result));
// 			  window.dispatchEvent(
// 				new CustomEvent(eventName, { detail: { key, value: val(current) } })
// 			  );
// 			  return result;
// 			});
// 		  } else {
// 			window[type].setItem(key, serialize(val));
// 			window.dispatchEvent(new CustomEvent(eventName, { detail: { key, value: val } }));
// 			setValue(val);
// 		  }
// 		},
// 		[key]
// 	  );
  
// 	  const removeStorageValue = useCallback(() => {
// 		window[type].removeItem(key);
// 		window.dispatchEvent(new CustomEvent(eventName, { detail: { key, value: defaultValue } }));
// 	  }, []);
  
// 	  useWindowEvent('storage', (event) => {
// 		if (event.storageArea === window[type] && event.key === key) {
// 		  setValue(deserialize(event.newValue ?? undefined));
// 		}
// 	  });
  
// 	  useWindowEvent(eventName, (event) => {
// 		if (event.detail.key === key) {
// 		  setValue(event.detail.value);
// 		}
// 	  });
  
// 	  useEffect(() => {
// 		if (defaultValue !== undefined && value === undefined) {
// 		  setStorageValue(defaultValue);
// 		}
// 	  }, [defaultValue, value, setStorageValue]);
  
// 	  useEffect(() => {
// 		if (getInitialValueInEffect) {
// 		  setValue(readStorageValue());
// 		}
// 	  }, []);
  
// 	  return [
// 		value === undefined ? defaultValue : value,
// 		setStorageValue,
// 		removeStorageValue,
// 	  ]
// 	};
//   }