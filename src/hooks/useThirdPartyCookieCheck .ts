import { notification } from 'antd';
import { useEffect, useState } from 'react';

export const useThirdPartyCookieCheck = (): boolean => {
  const [isSupported, setIsSupported] = useState<boolean>(false);

  useEffect(() => {
    const frame = document.createElement('iframe');

    frame.id = '3pc';
    frame.src = 'https://chamithrepo.github.io/create-third-party-cookie/';
    frame.style.display = 'none';
    frame.style.position = 'fixed';
    document.body.appendChild(frame);

    window.addEventListener(
      'message',
      function listen(event) {
        if (event.data === '3pcSupported' || event.data === '3pcUnsupported') {
          const thirdPartyCookiesSupported: boolean =
            event.data === '3pcSupported';

          setIsSupported(thirdPartyCookiesSupported);

          document.body.removeChild(frame);
          window.removeEventListener('message', listen);

          if (!thirdPartyCookiesSupported) {
            notification.error({
              message:
                'Por favor, habilite os cookies de terceiros e reinicie a página. Isso é necessário para exibir os elementos interativos',
              duration: 15,
            });
          }
        }
      },
      false
    );
  }, []);

  return isSupported;
};
