'use client';

import { useEffect } from 'react';

export default function EmbedScript() {
  useEffect(() => {
    // Create and append the embed script
    const script = document.createElement('script');
    script.src = `${process.env.NEXT_PUBLIC_EMBED_BASE_URL}/embed.js`;
    script.setAttribute('data-chat-url', `${process.env.NEXT_PUBLIC_EMBED_BASE_URL}/embed`);
    script.setAttribute('data-display-mobile', 'true');
    script.setAttribute('data-tagline', 'Talk To Us');
    script.setAttribute('data-colour', '#473733');
    script.async = true;

    document.body.appendChild(script);

    let closeBtn: HTMLButtonElement | null = null;

    const injectCloseButton = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (node.textContent?.trim() === 'Talk To Us') {
          const taglineEl = node.parentElement;
          if (!taglineEl || taglineEl.querySelector('[data-tagline-close]')) return;

          closeBtn = document.createElement('button');
          closeBtn.setAttribute('data-tagline-close', 'true');
          closeBtn.textContent = '×';
          closeBtn.style.cssText =
            'margin-left:4px;background:none;border:none;cursor:pointer;font-size:14px;line-height:1;padding:0 2px;opacity:0.7;color:inherit;vertical-align:middle;';
          closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (taglineEl) taglineEl.style.display = 'none';
          });

          taglineEl.appendChild(closeBtn);
          observer.disconnect();
          return;
        }
      }
    };

    const observer = new MutationObserver(injectCloseButton);
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup function to remove the script when component unmounts
    return () => {
      observer.disconnect();
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Also clean up any embed elements that might have been created
      const embedContainer = document.querySelector('[data-embed-container]');
      if (embedContainer) {
        embedContainer.remove();
      }
    };
  }, []);

  return null;
}
