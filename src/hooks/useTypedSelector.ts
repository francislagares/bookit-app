import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'src/redux/reducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
