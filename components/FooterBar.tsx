import React from "react"

export default function FooterBar() {
  return (
    <footer className="container bg-white text-black">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-t-slate-200 px-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href="https://twitter.com/0xBabatunde"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Salam Lawal
            </a>
            . Hosted on{" "}
            <a
              href="https://netlify.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Netlify
            </a>
            . Check out our{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              terms & conditions
            </a>
            .
          </p>
        </div>
        <p className="text-center text-sm md:text-left">
          Folow us on{" "}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Twitter
          </a>
          .
        </p>
      </div>
    </footer>
  )
}