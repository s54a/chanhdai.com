import { USER } from "@/features/portfolio/data/user";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-0.5 my-0.75">
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <a
          href="https://knowindia.india.gov.in/profile/india-at-a-glance.php"
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 -left-px"
        >
          {/* Flag of India */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="60"
            height="40"
            viewBox="-45 -30 90 60"
            fill="#07038D"
          >
            <title>Flag of India</title>
            <path fill="#FFF" d="m-45-30h90v60h-90z" />
            <path fill="#FF6820" d="m-45-30h90v20h-90z" />
            <path fill="#046A38" d="m-45 10h90v20h-90z" />
            <circle r="9.25" />
            <circle fill="#FFF" r="8" />
            <circle r="1.6" />
            <g id="d">
              <g id="c">
                <g id="b">
                  <g id="a">
                    <path d="m0-8 .3 4.81409L0-.80235-.3-3.18591z" />
                    <circle transform="rotate(7.5)" r="0.35" cy="-8" />
                  </g>
                  <use xlinkHref="#a" transform="scale(-1)" />
                </g>
                <use xlinkHref="#b" transform="rotate(15)" />
              </g>
              <use xlinkHref="#c" transform="rotate(30)" />
            </g>
            <use xlinkHref="#d" transform="rotate(60)" />
            <use xlinkHref="#d" transform="rotate(120)" />
          </svg>
        </a>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4">
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-3xl font-semibold">
              {USER.displayName}
            </h1>

            <VerifiedIcon
              className="size-4.5 text-info select-none"
              aria-label="Verified"
            />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <div className="h-12.5 border-t border-edge py-1 pl-4 sm:h-9">
            <FlipSentences
              className="font-mono text-sm text-balance text-muted-foreground"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
            >
              {USER.flipSentences}
            </FlipSentences>
          </div>
        </div>
      </div>
    </div>
  );
}
