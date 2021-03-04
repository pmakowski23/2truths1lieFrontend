import { useEffect } from "react";

// eslint-disable-next-line
const useEffectOnlyOnce = (func) => useEffect(func, []);

export default useEffectOnlyOnce;
