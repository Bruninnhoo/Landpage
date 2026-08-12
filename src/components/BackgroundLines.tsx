import './BackgroundLines.css'

export default function BackgroundLines() {
  return (
    <div className="bg-lines-container" aria-hidden="true">
      <svg
        className="bg-lines-svg"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Upper Wind Stream */}
        <path
          className="wind-line wind-line--1"
          d="M-400 180 C 150 110, 450 250, 850 150 C 1150 80, 1450 210, 1900 130"
        />
        <path
          className="wind-line wind-line--2"
          d="M-350 215 C 200 145, 500 285, 900 185 C 1200 115, 1500 245, 1950 165"
        />

        {/* Mid-Screen Wind Stream */}
        <path
          className="wind-line wind-line--3"
          d="M-450 470 C 100 400, 400 550, 800 430 C 1100 350, 1400 490, 1850 410"
        />
        <path
          className="wind-line wind-line--4"
          d="M-400 505 C 150 435, 450 585, 850 465 C 1150 385, 1450 525, 1900 445"
        />

        {/* Lower Wind Stream */}
        <path
          className="wind-line wind-line--5"
          d="M-380 740 C 250 660, 550 810, 950 690 C 1250 610, 1550 760, 1900 670"
        />
        <path
          className="wind-line wind-line--6"
          d="M-320 775 C 300 695, 600 845, 1000 725 C 1300 645, 1600 795, 1950 705"
        />
      </svg>
    </div>
  )
}
