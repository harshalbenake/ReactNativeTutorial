import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
state = {getParams: params}
  navigationRef.current?.navigate(name, params);
}
export function push(name, params) {
state = {getParams: params}
  navigationRef.current?.push(name, params);
}
export function navigateNoParam(name) {
  navigationRef.current?.navigate(name, "");
}
export function navigateGoBack() {
  navigationRef.current?.goBack();
}

export function getParams() {
 return (state.getParams)
}