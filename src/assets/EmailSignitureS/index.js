export const LeftAlignSvg = ({ width, height, frame='', fill=''  }) => (
    <svg 
    // maxWidth='10'
    // maxHeight={height}
    // width="100%" 
    // height="100%" 
    viewBox="0 0 210 104" 
    fill='none'
    xmlns="http://www.w3.org/2000/svg">
        <rect className={frame} x="5" width="58" height="58" rx="29" fill="#F8F8F8"/>
        <path className={fill} fill-rule="evenodd" clip-rule="evenodd" d="M30.0002 26.6667C30.0002 25.7462 30.7464 25 31.6668 25C32.5873 25 33.3335 25.7462 33.3335 26.6667C33.3335 27.5872 32.5873 28.3334 31.6668 28.3334C30.7464 28.3334 30.0002 27.5872 30.0002 26.6667ZM31.6668 26.3334C31.4827 26.3334 31.3335 26.4826 31.3335 26.6667C31.3335 26.8508 31.4827 27 31.6668 27C31.8509 27 32.0002 26.8508 32.0002 26.6667C32.0002 26.4826 31.8509 26.3334 31.6668 26.3334Z" fill="#BABABA"/>
        <path className={fill} fill-rule="evenodd" clip-rule="evenodd" d="M27.3335 24.3334C27.3335 23.2288 28.2289 22.3334 29.3335 22.3334H38.6668C39.7714 22.3334 40.6668 23.2288 40.6668 24.3334V33.6667C40.6668 34.7713 39.7714 35.6667 38.6668 35.6667H29.3335C28.2289 35.6667 27.3335 34.7713 27.3335 33.6667V24.3334ZM29.3335 23.6667C28.9653 23.6667 28.6668 23.9652 28.6668 24.3334V33.6667C28.6668 33.9526 28.8468 34.1965 29.0996 34.2912L36.1955 27.1953C36.4558 26.935 36.8779 26.935 37.1383 27.1953L39.3335 29.3905V24.3334C39.3335 23.9652 39.035 23.6667 38.6668 23.6667H29.3335ZM39.3335 31.2761L36.6669 28.6095L30.943 34.3334H38.6668C39.035 34.3334 39.3335 34.0349 39.3335 33.6667V31.2761Z" fill="#BABABA"/>
        <circle className={fill} cx="8" cy="74" r="8" fill="#BABABA"/>
        <circle className={fill} cx="34" cy="74" r="8" fill="#BABABA"/>
        <circle className={fill}  cx="60" cy="74" r="8" fill="#BABABA"/>
        <rect className={fill} x="88" width="122" height="16" rx="3" fill="#BABABA"/>
        <path className={fill} d="M88 23C88 21.3431 89.3431 20 91 20H146C147.657 20 149 21.3431 149 23V33C149 34.6569 147.657 36 146 36H91C89.3431 36 88 34.6569 88 33V23Z" fill="#BABABA"/>
        <rect className={fill} x="88" y="52" width="122" height="10" rx="3" fill="#BABABA"/>
        <rect className={fill} x="88" y="66" width="122" height="10" rx="3" fill="#BABABA"/>
        <rect className={fill} x="88" y="80" width="122" height="10" rx="3" fill="#BABABA"/>
        <path className={fill} d="M88 97C88 95.3431 89.3431 94 91 94H146C147.657 94 149 95.3431 149 97V101C149 102.657 147.657 104 146 104H91C89.3431 104 88 102.657 88 101V97Z" fill="#BABABA"/>
    </svg>
    
);
export const RightAlignSvg = ({ width, height, frame='', fill='' }) => (
<svg 
    // maxHeight={height}
    // maxWidth={width}
    // width="100%" 
    // height="100%" 
    viewBox="0 0 210 104" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <rect className={fill} width="122" height="16" rx="3" fill="#BABABA"/>
    <path className={fill} d="M0 23C0 21.3431 1.34315 20 3 20H58C59.6569 20 61 21.3431 61 23V33C61 34.6569 59.6569 36 58 36H3C1.34315 36 0 34.6569 0 33V23Z" fill="#BABABA"/>
    <rect className={fill} y="52" width="122" height="10" rx="3" fill="#BABABA"/>
    <rect className={fill} y="66" width="122" height="10" rx="3" fill="#BABABA"/>
    <rect className={fill} y="80" width="122" height="10" rx="3" fill="#BABABA"/>
    <path className={fill} d="M0 97C0 95.3431 1.34315 94 3 94H58C59.6569 94 61 95.3431 61 97V101C61 102.657 59.6569 104 58 104H3C1.34315 104 0 102.657 0 101V97Z" fill="#BABABA"/>
    <rect className={frame} x="147" width="58" height="58" rx="29" fill="#F8F8F8"/>
    <path className={fill} fill-rule="evenodd" clip-rule="evenodd" d="M172 26.6667C172 25.7462 172.746 25 173.667 25C174.587 25 175.333 25.7462 175.333 26.6667C175.333 27.5872 174.587 28.3334 173.667 28.3334C172.746 28.3334 172 27.5872 172 26.6667ZM173.667 26.3334C173.483 26.3334 173.333 26.4826 173.333 26.6667C173.333 26.8508 173.483 27 173.667 27C173.851 27 174 26.8508 174 26.6667C174 26.4826 173.851 26.3334 173.667 26.3334Z" fill="#BABABA"/>
    <path className={fill} fill-rule="evenodd" clip-rule="evenodd" d="M169.333 24.3334C169.333 23.2288 170.229 22.3334 171.333 22.3334H180.667C181.771 22.3334 182.667 23.2288 182.667 24.3334V33.6667C182.667 34.7713 181.771 35.6667 180.667 35.6667H171.333C170.229 35.6667 169.333 34.7713 169.333 33.6667V24.3334ZM171.333 23.6667C170.965 23.6667 170.667 23.9652 170.667 24.3334V33.6667C170.667 33.9526 170.847 34.1965 171.1 34.2912L178.195 27.1953C178.456 26.935 178.878 26.935 179.138 27.1953L181.333 29.3905V24.3334C181.333 23.9652 181.035 23.6667 180.667 23.6667H171.333ZM181.333 31.2761L178.667 28.6095L172.943 34.3334H180.667C181.035 34.3334 181.333 34.0349 181.333 33.6667V31.2761Z" fill="#BABABA"/>
    <circle className={fill} cx="150" cy="74" r="8" fill="#BABABA"/>
    <circle className={fill} cx="176" cy="74" r="8" fill="#BABABA"/>
    <circle className={fill} cx="202" cy="74" r="8" fill="#BABABA"/>
</svg>

);

export const CenterAlignSvg = ({ width, height, frame='', fill='' }) => (
<svg 
// maxHeight={height}
// maxWidth={width}
// width="100%" 
// height="100%"  
viewBox="0 0 122 206" 
fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect className={frame} x="32" width="58" height="58" rx="29" fill="#F8F8F8"/>
    <path className={fill} fill-rule="evenodd" clip-rule="evenodd" d="M57.0002 26.6667C57.0002 25.7462 57.7464 25 58.6668 25C59.5873 25 60.3335 25.7462 60.3335 26.6667C60.3335 27.5872 59.5873 28.3334 58.6668 28.3334C57.7464 28.3334 57.0002 27.5872 57.0002 26.6667ZM58.6668 26.3334C58.4827 26.3334 58.3335 26.4826 58.3335 26.6667C58.3335 26.8508 58.4827 27 58.6668 27C58.8509 27 59.0002 26.8508 59.0002 26.6667C59.0002 26.4826 58.8509 26.3334 58.6668 26.3334Z" fill="#BABABA"/>
    <path className={fill} fill-rule="evenodd" clip-rule="evenodd" d="M54.3335 24.3334C54.3335 23.2288 55.2289 22.3334 56.3335 22.3334H65.6668C66.7714 22.3334 67.6668 23.2288 67.6668 24.3334V33.6667C67.6668 34.7713 66.7714 35.6667 65.6668 35.6667H56.3335C55.2289 35.6667 54.3335 34.7713 54.3335 33.6667V24.3334ZM56.3335 23.6667C55.9653 23.6667 55.6668 23.9652 55.6668 24.3334V33.6667C55.6668 33.9526 55.8468 34.1965 56.0996 34.2912L63.1955 27.1953C63.4558 26.935 63.8779 26.935 64.1383 27.1953L66.3335 29.3905V24.3334C66.3335 23.9652 66.035 23.6667 65.6668 23.6667H56.3335ZM66.3335 31.2761L63.6669 28.6095L57.943 34.3334H65.6668C66.035 34.3334 66.3335 34.0349 66.3335 33.6667V31.2761Z" fill="#BABABA"/>
    <circle className={fill} cx="35" cy="74" r="8" fill="#BABABA"/>
    <circle className={fill} cx="61" cy="74" r="8" fill="#BABABA"/>
    <circle className={fill} cx="87" cy="74" r="8" fill="#BABABA"/>
    <rect className={fill} y="102" width="122" height="16" rx="3" fill="#BABABA"/>
    <path className={fill} d="M40.6665 125C40.6665 123.343 42.0096 122 43.6665 122H78.3332C79.99 122 81.3332 123.343 81.3332 125V135C81.3332 136.657 79.99 138 78.3332 138H43.6665C42.0097 138 40.6665 136.657 40.6665 135V125Z" fill="#BABABA"/>
    <rect className={fill} y="154" width="122" height="10" rx="3" fill="#BABABA"/>
    <rect className={fill} y="168" width="122" height="10" rx="3" fill="#BABABA"/>
    <rect className={fill} y="182" width="122" height="10" rx="3" fill="#BABABA"/>
    <path className={fill} d="M0 199C0 197.343 1.34315 196 3 196H58C59.6569 196 61 197.343 61 199V203C61 204.657 59.6569 206 58 206H3C1.34315 206 0 204.657 0 203V199Z" fill="#BABABA"/>
</svg>

);