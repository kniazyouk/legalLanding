const Logo = ({ className = 'w-10 h-10' }: { className?: string }) => {
   return (
      <svg
         viewBox="0 0 24 24"
         className={className}
         fill="none"
         stroke="currentColor"
         strokeWidth="1.7"
         strokeLinecap="round"
         strokeLinejoin="round"
         aria-hidden="true"
      >
         <path d="M12 2.4 20 5.2v5.4c0 4.2-3.2 8-8 9.8C7.2 18.6 4 14.8 4 10.6V5.2Z" />
         <g transform="rotate(18 12 12)">
            <rect x="8.6" y="6.4" width="6.8" height="3.6" rx="1.5" />
            <path d="M12 10 12 14.6" />
            <rect x="7.8" y="14.6" width="8.4" height="2.4" rx="1.2" />
         </g>
      </svg>
   )
}

export default Logo
