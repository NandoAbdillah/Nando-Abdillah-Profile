"use client";

import React, { createContext, useContext, useState, useEffect } from 'react'

const LocaleContext = createContext({
    currentLocale: 'id', 
    setCurrentLocale: (locale) => {}, 
    headers: {}, 
    translations: {}, 
    footers: {}, 
})

export function useLocale() {
    return useContext(LocaleContext)
}

export default function ClientRootLayout({children}) {
    const [currentLocale, setCurrentLocale] = useState('id')
    const [headers, setHeaders] = useState({})
    const [translations, setTranslations] = useState({})
    const [footers, setFooters] = useState({})
    const [path, setPath] = useState('')

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedLang = localStorage.getItem('lang');
        if (storedLang) {
            setCurrentLocale(storedLang);
        } else {
          localStorage.setItem("lang", "id");
        }
      }

      if (typeof window !== 'undefined') {
        setPath(window.location.pathname.split('/')[1])
      }
    }, []);

    let parsedLocale = currentLocale

    

    
    useEffect(() => {
      let filename = path ? path : 'common'

      const fetchHeaders = () => {
        fetch(`/locales/${parsedLocale}/headers.json`)
        .then((res) => {
          if(!res.ok) throw new Error('Translation file not found');
          return res.json();
        })
        .then((data) => {
          console.log('Fetched headers:', data);
          setHeaders(data);
        })
        .catch(() => {
          fetch(`/locales/en/headers.json`)
            .then(res => res.json())
            .then(data => setHeaders(data));
        });
      }

      const fetchContents = () => {
        fetch(`/locales/${parsedLocale}/${filename}.json`)
        .then((res) => {
          if(!res.ok) throw new Error('Translation file not found');
          return res.json();
        })
        .then((data) => setTranslations(data))
        .catch(() => {
          fetch(`/locales/en/${filename}.json`)
            .then(res => res.json())
            .then(data => setTranslations(data));
        });
      }

      const fetchFooters = () => {
        fetch(`/locales/${parsedLocale}/footers.json`)
        .then((res) => {
          if(!res.ok) throw new Error('Translation file not found');
          return res.json();
        })
        .then((data) => setFooters(data))
        .catch(() => {
          fetch(`/locales/en/footers.json`)
            .then(res => res.json())
            .then(data => setFooters(data));
        });
      }

      fetchHeaders()
      fetchContents()
      // fetchFooters()
    }, [currentLocale, path]);

    return (
        <LocaleContext.Provider value={{ currentLocale, setCurrentLocale, headers, translations, footers }}>
            {children}
        </LocaleContext.Provider>
    )
}