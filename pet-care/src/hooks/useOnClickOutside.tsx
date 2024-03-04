

import React, { useEffect } from "react";



//모달창 외의 다른 부분을 클릭했을때, 모달을 닫아준다. ( ref = 닫기를 할 모달,  handler = 모달 상태값 )
export const useOnClickOutside = (ref: any, handler:any) => {
    useEffect(() => {
            const listener = (e: Event): void => {
                if (!ref.current || ref.current.contains(e.target)) {
                    return
                };
                handler(false);
              };
              document.addEventListener("click", listener);
              return () => {
                document.removeEventListener("click", listener);
              };
    }, [ref, handler]);
};

