import {createNavigationContainerRef} from '@react-navigation/native';

export const rootNavigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: any): void {
  if (rootNavigationRef.isReady()) {
    //@ts-expect-error navigation types undefined
    navigationRef.navigate(name, params);
  }
}

export default rootNavigationRef;
