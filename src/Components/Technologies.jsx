import { useEffect, useRef, useState } from "react"
import { scrollSkills } from "./Animate"
import { Link } from "react-router-dom"
import TechnologiesCard from "./TechnologiesCard";

const Technologies = () => {
    const [iconSizes, setIconSizes] = useState(65);
    let skillsContainer = useRef(null);

    useEffect(() => {
        scrollSkills(skillsContainer)
    }, [skillsContainer]);

    const skillsData = [
        {
            name: 'Python',
            bgcolor: '#F0F5F9',
            svg: (
                <svg width={iconSizes} height={iconSizes} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                        <path id="rect12" style={{ 'fill': '#373737', 'fillOpacity': 1, 'strokeWidth': .476881 }}
                            d="M10.986 1.693c-2.642 0-4.769 1.064-4.769 2.385v1.88l4.775.019-.02.485h-7.14c-1.32 0-2.383 2.127-2.383 4.77C1.449 13.872 2.512 16 3.833 16H5.74c0-1.202.074-2.112.25-2.815.176-.703.462-1.207.883-1.544.842-.674 2.086-.648 3.875-.648 2.026 0 3.295-.027 4-.55.353-.26.599-.648.765-1.284.166-.637.242-1.514.242-2.697h.477c0 1.203-.074 2.113-.258 2.817-.184.705-.49 1.213-.941 1.547-.905.67-2.259.644-4.285.644-1.789 0-2.929.025-3.577.543-.324.26-.56.65-.719 1.288-.16.638-.235 1.517-.235 2.699v2.384c0 1.321 2.127 2.385 4.77 2.385 2.641 0 4.768-1.064 4.768-2.385v-1.899L11 16.486V16h7.14c1.32 0 2.384-2.127 2.384-4.769 0-2.642-1.064-4.769-2.385-4.769h-2.384V4.078c0-1.321-2.127-2.384-4.769-2.384zm-2.63 1.503h.007a.882.882 0 1 1-.006 0zm5.247 14.306h.006a.882.882 0 1 1-.006 0z"
                        ></path>
                    </g>
                </svg>
            )
        },
        {
            name: 'React',
            bgcolor: '#FFB3B3',
            svg: (
                <svg className="technology_svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                        <title>react</title>
                        <rect width="24" height="24" fill="none"></rect>
                        <path
                            d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z">
                        </path>
                    </g>
                </svg>
            )
        },
        {
            name: 'AWS',
            bgcolor: '#F0EFEE',
            svg: (
                <svg className="technology_svg" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g fill="#008B73"> 
                            <path d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.164-.315c-.416.491-.937.737-1.565.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.192-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.617.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.048-.214c0-.085.042-.133.127-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.101-.208a.365.365 0 01.213-.053h.426c.1 0 .17.016.212.053.043.032.08.107.102.208l.84 3.578.92-3.578a.459.459 0 01.107-.208.347.347 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.768.768 0 01-.038.133l-1.283 4.127c-.031.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.38.38 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.461.461 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.428 2.428 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.435 1.435 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z"></path> <path fillRule="evenodd" d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z" clipRule="evenodd"></path> <path fillRule="evenodd" d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.217-.1.212-.53.686-1.72.462-2.003z" clipRule="evenodd"></path> 
                        </g> 
                    </g>
                </svg>
            )
        },
        {
            name: 'Github',
            bgcolor: '#F2F5FD',
            svg: (
                <svg className="technology_svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <title>github</title> <rect width="24" height="24" fill="none"></rect>
                        <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z">
                        </path> 
                    </g>
                    </svg>
            )
        },
        {
            name: 'JavaScript',
            bgcolor: '#020533',
            svg: (
                <svg className="technology_svg" fill="#F9CD4B" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <title>javascript</title> <path d="M17.313 14.789h-2.809c0 2.422-0.011 4.829-0.011 7.254 0.033 0.329 0.051 0.712 0.051 1.099 0 0.81-0.081 1.601-0.236 2.365l0.013-0.076c-0.412 0.861-1.475 0.751-1.957 0.6-0.451-0.242-0.808-0.609-1.031-1.055l-0.006-0.014c-0.044-0.094-0.097-0.174-0.16-0.246l0.001 0.001-2.281 1.406c0.367 0.79 0.934 1.434 1.637 1.885l0.018 0.011c0.763 0.427 1.675 0.678 2.645 0.678 0.484 0 0.954-0.063 1.401-0.18l-0.038 0.009c0.988-0.248 1.793-0.89 2.254-1.744l0.009-0.019c0.359-0.914 0.566-1.973 0.566-3.080 0-0.388-0.026-0.77-0.075-1.145l0.005 0.044c0.015-2.567 0-5.135 0-7.722zM28.539 23.843c-0.219-1.368-1.11-2.518-3.753-3.59-0.92-0.431-1.942-0.731-2.246-1.425-0.063-0.158-0.099-0.341-0.099-0.532 0-0.124 0.015-0.244 0.044-0.359l-0.002 0.010c0.208-0.55 0.731-0.935 1.343-0.935 0.199 0 0.388 0.040 0.559 0.113l-0.009-0.004c0.552 0.19 0.988 0.594 1.215 1.112l0.005 0.013c1.292-0.845 1.292-0.845 2.193-1.406-0.216-0.369-0.459-0.689-0.734-0.977l0.002 0.002c-0.767-0.814-1.852-1.32-3.056-1.32-0.171 0-0.34 0.010-0.505 0.030l0.020-0.002-0.881 0.111c-0.856 0.194-1.587 0.639-2.133 1.252l-0.003 0.004c-0.535 0.665-0.859 1.519-0.859 2.449 0 1.279 0.613 2.415 1.56 3.131l0.010 0.007c1.706 1.275 4.2 1.555 4.519 2.755 0.3 1.462-1.087 1.931-2.457 1.762-0.957-0.218-1.741-0.83-2.184-1.652l-0.009-0.017-2.287 1.313c0.269 0.536 0.607 0.994 1.011 1.385l0.001 0.001c2.174 2.194 7.61 2.082 8.586-1.255 0.113-0.364 0.178-0.782 0.178-1.215 0-0.3-0.031-0.593-0.091-0.875l0.005 0.028zM1.004 1.004h29.991v29.991h-29.991z"></path> 
                </g>
                </svg>
            )
        },
        {
            name: 'Docker',
            bgcolor: '#FFF7E8',
            svg: (
                <svg className="technology_svg" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <title>docker</title> <path d="M30.679 13.367c-0.613-0.404-1.366-0.645-2.175-0.645-0.093 0-0.185 0.003-0.276 0.009l0.012-0.001c-0.446 0.001-0.882 0.041-1.306 0.115l0.046-0.007c-0.235-1.357-1.025-2.495-2.122-3.191l-0.019-0.011-0.429-0.248-0.282 0.408c-0.336 0.512-0.599 1.108-0.756 1.745l-0.008 0.039c-0.089 0.324-0.14 0.696-0.14 1.080 0 0.831 0.24 1.605 0.654 2.258l-0.010-0.017c-0.637 0.299-1.381 0.488-2.164 0.524l-0.013 0h-19.729c-0.516 0.001-0.934 0.418-0.936 0.933v0c-0.001 0.056-0.001 0.123-0.001 0.19 0 1.751 0.317 3.428 0.897 4.977l-0.032-0.098c0.558 1.633 1.612 2.975 2.98 3.881l0.028 0.017c1.744 0.903 3.808 1.432 5.995 1.432 0.207 0 0.412-0.005 0.617-0.014l-0.029 0.001c0.018 0 0.039 0 0.060 0 1.272 0 2.515-0.121 3.72-0.352l-0.123 0.020c1.795-0.336 3.395-0.939 4.845-1.773l-0.074 0.039c1.257-0.735 2.331-1.621 3.245-2.652l0.012-0.014c1.325-1.56 2.403-3.381 3.145-5.365l0.041-0.125h0.276c0.055 0.002 0.119 0.004 0.183 0.004 1.226 0 2.34-0.481 3.163-1.265l-0.002 0.002c0.377-0.358 0.676-0.793 0.873-1.281l0.009-0.024 0.122-0.359zM3.79 14.849h2.646c0.127-0.001 0.23-0.104 0.23-0.231 0 0 0 0 0 0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0.127 0.001-0.23 0.104-0.23 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM7.434 14.849h2.644c0.127 0 0.231-0.103 0.231-0.231 0 0 0 0 0-0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0 0-0 0-0 0-0.128 0-0.232 0.104-0.232 0.232 0 0 0 0 0 0v0 2.355c0.001 0.128 0.104 0.231 0.232 0.231v0zM11.132 14.849h2.646c0.127-0.001 0.23-0.104 0.23-0.231 0 0 0 0 0 0v0-2.355c0-0 0-0.001 0-0.001 0-0.127-0.103-0.23-0.23-0.231h-2.646c-0.127 0.001-0.23 0.104-0.23 0.231v0 2.356c0 0.127 0.103 0.231 0.231 0.231v0zM14.788 14.849h2.643c0 0 0 0 0 0 0.128 0 0.231-0.103 0.232-0.231v-2.355c0-0 0-0 0-0 0-0.128-0.104-0.232-0.232-0.232-0 0-0 0-0 0h-2.643c-0.127 0-0.231 0.103-0.231 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM7.434 11.461h2.644c0.128-0.001 0.231-0.104 0.231-0.232 0 0 0 0 0 0v0-2.355c0 0 0 0 0-0 0-0.127-0.103-0.231-0.231-0.231h-2.644c-0.128 0-0.231 0.103-0.232 0.231v2.355c0.001 0.128 0.104 0.231 0.232 0.232h0zM11.132 11.461h2.646c0.127-0.001 0.23-0.105 0.23-0.232v0-2.355c0 0 0 0 0-0 0-0.127-0.103-0.231-0.231-0.231h-2.643c-0.127 0-0.231 0.103-0.231 0.231 0 0 0 0 0 0v0 2.355c0.001 0.128 0.103 0.231 0.231 0.232h0zM14.788 11.461h2.643c0.128-0.001 0.231-0.104 0.232-0.232v-2.355c-0.001-0.128-0.104-0.231-0.232-0.231h-2.643c-0.127 0-0.231 0.103-0.231 0.231 0 0 0 0 0 0v0 2.355c0 0.128 0.103 0.231 0.231 0.232h0zM14.788 8.073h2.643c0 0 0 0 0 0 0.128 0 0.232-0.104 0.232-0.232 0-0 0-0 0-0v0-2.356c-0.001-0.128-0.104-0.231-0.232-0.231 0 0-0 0-0 0h-2.643c-0.127 0-0.231 0.103-0.231 0.231v0 2.356c0 0 0 0 0 0.001 0 0.127 0.103 0.23 0.23 0.23 0 0 0 0 0.001 0h-0zM18.475 14.849h2.644c0 0 0 0 0 0 0.128 0 0.231-0.103 0.232-0.231v-2.355c0-0 0-0 0-0 0-0.128-0.104-0.232-0.232-0.232-0 0-0 0-0 0h-2.644c0 0 0 0-0 0-0.128 0-0.231 0.103-0.231 0.231v2.356c0 0.127 0.103 0.231 0.231 0.231v0z"></path> 
                    </g>
                </svg>
            )
        },
        {
            name: 'HTML5',
            bgcolor: '#A9A9A9',
            svg: (
                <svg className="technology_svg" fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M6.32 5.5l1.759 19.774 7.893 2.226 7.948-2.226L25.68 5.5H6.32zm15.537 6.449H12.59l.207 2.488h8.854l-.687 7.479-4.937 1.361v.014h-.055l-4.978-1.375-.303-3.821h2.406l.179 1.925 2.695.728 2.708-.728.303-3.136h-8.415l-.645-7.341h12.155l-.22 2.406z"></path>
                    </g>
                </svg>
            )
        },
        {
            name: 'CSS',
            bgcolor: '#32309A',
            svg: (
                <svg className="technology_svg" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff" stroke="#fff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"><g>
                        <path style={{ 'fill': '#fff' }} d="M378.413,0H208.297h-13.182L185.8,9.314L57.02,138.102l-9.314,9.314v13.176v265.514 c0,47.36,38.528,85.895,85.896,85.895h244.811c47.353,0,85.881-38.535,85.881-85.895V85.896C464.294,38.528,425.766,0,378.413,0z M432.497,426.105c0,29.877-24.214,54.091-54.084,54.091H133.602c-29.884,0-54.098-24.214-54.098-54.091V160.591h83.716 c24.885,0,45.077-20.178,45.077-45.07V31.804h170.116c29.87,0,54.084,24.214,54.084,54.092V426.105z"></path> <path className="st0" d="M169.574,268.949c5.837,0,9.104,2.171,12.499,6.786c2.709,3.805,5.432,5.167,8.825,5.167 c5.028,0,9.105-3.673,9.105-8.965c0-2.171-0.684-4.078-1.774-5.977c-4.622-8.288-14.802-14.669-28.655-14.669 c-16.171,0-28.124,7.603-33.012,22.685c-1.899,6.11-2.57,10.865-2.57,24.989c0,14.125,0.67,18.881,2.57,24.99 c4.888,15.081,16.841,22.685,33.012,22.685c13.853,0,24.033-6.382,28.655-14.67c1.09-1.899,1.774-3.805,1.774-5.976 c0-5.3-4.078-8.965-9.105-8.965c-3.393,0-6.116,1.361-8.825,5.16c-3.394,4.622-6.662,6.794-12.499,6.794 c-7.471,0-11.814-3.938-13.853-10.187c-1.089-3.393-1.494-6.654-1.494-19.83c0-13.175,0.406-16.436,1.494-19.829 C157.76,272.887,162.103,268.949,169.574,268.949z"></path> <path className="st0" d="M255.149,289.595l-4.888-0.684c-10.725-1.494-14.398-5.02-14.398-10.187c0-5.837,4.343-9.915,12.498-9.915 c5.698,0,11.409,1.634,15.892,3.805c1.899,0.95,3.938,1.494,5.837,1.494c4.888,0,8.7-3.666,8.7-8.693 c0-3.261-1.494-5.977-4.762-8.016c-5.432-3.394-15.612-6.11-25.806-6.11c-19.97,0-32.733,11.269-32.733,28.25 c0,16.304,10.32,25.13,29.2,27.713l4.901,0.677c10.99,1.494,14.258,4.888,14.258,10.32c0,6.389-5.306,10.872-15.082,10.872 c-6.787,0-12.219-1.767-19.83-5.977c-1.634-0.956-3.672-1.634-5.837-1.634c-5.166,0-8.965,3.938-8.965,8.832 c0,3.254,1.634,6.382,4.748,8.42c6.116,3.799,16.031,7.876,29.074,7.876c24.032,0,36.266-12.358,36.266-29.067 C284.223,300.865,274.307,292.311,255.149,289.595z"></path> <path className="st0" d="M338.697,289.595l-4.888-0.684c-10.738-1.494-14.398-5.02-14.398-10.187c0-5.837,4.344-9.915,12.484-9.915 c5.712,0,11.423,1.634,15.892,3.805c1.913,0.95,3.952,1.494,5.851,1.494c4.887,0,8.686-3.666,8.686-8.693 c0-3.261-1.494-5.977-4.748-8.016c-5.432-3.394-15.626-6.11-25.806-6.11c-19.969,0-32.733,11.269-32.733,28.25 c0,16.304,10.32,25.13,29.2,27.713l4.888,0.677c11.004,1.494,14.258,4.888,14.258,10.32c0,6.389-5.292,10.872-15.068,10.872 c-6.8,0-12.232-1.767-19.829-5.977c-1.634-0.956-3.673-1.634-5.851-1.634c-5.153,0-8.965,3.938-8.965,8.832 c0,3.254,1.634,6.382,4.762,8.42c6.117,3.799,16.032,7.876,29.06,7.876c24.047,0,36.266-12.358,36.266-29.067 C367.758,300.865,357.843,292.311,338.697,289.595z"></path> 
                        </g> 
                    </g>
                </svg>
            )
        },
        {
            name: 'MySQL',
            bgcolor: '#687FA5',
            svg: (
            <svg className="technology_svg" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="m24.129 23.412-.508-.484c-.251-.331-.518-.624-.809-.891l-.005-.004q-.448-.407-.931-.774-.387-.266-1.064-.641c-.371-.167-.661-.46-.818-.824l-.004-.01-.048-.024c.212-.021.406-.06.592-.115l-.023.006.57-.157c.236-.074.509-.122.792-.133h.006c.298-.012.579-.06.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496c-.131-.178-.278-.333-.443-.468l-.005-.004q-.629-.556-1.303-1.076c-.396-.309-.845-.624-1.311-.916l-.068-.04c-.246-.162-.528-.312-.825-.435l-.034-.012q-.448-.182-.883-.399c-.097-.048-.21-.09-.327-.119l-.011-.002c-.117-.024-.217-.084-.29-.169l-.001-.001c-.138-.182-.259-.389-.355-.609l-.008-.02q-.145-.339-.314-.651-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967c-.134-.354-.285-.657-.461-.942l.013.023c-.432-.736-.863-1.364-1.331-1.961l.028.038c-.463-.584-.943-1.106-1.459-1.59l-.008-.007c-.509-.478-1.057-.934-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282c-.285-.168-.616-.305-.965-.393l-.026-.006-1.113-.278-.629-.048q-.314-.024-.629-.024c-.148-.078-.275-.171-.387-.279-.11-.105-.229-.204-.353-.295l-.01-.007c-.605-.353-1.308-.676-2.043-.93l-.085-.026c-.193-.113-.425-.179-.672-.179-.176 0-.345.034-.499.095l.009-.003c-.38.151-.67.458-.795.84l-.003.01c-.073.172-.115.371-.115.581 0 .368.13.705.347.968l-.002-.003q.544.725.834 1.14.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52t.314.496c.065.098.147.179.241.242l.003.002c.099.072.164.185.169.313v.001c-.114.168-.191.369-.217.586l-.001.006c-.035.253-.085.478-.153.695l.008-.03c-.223.666-.351 1.434-.351 2.231 0 .258.013.512.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787.168.188.412.306.684.306.152 0 .296-.037.422-.103l-.005.002c.35-.126.599-.446.617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067c.024-.063.038-.135.038-.211 0-.015-.001-.03-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003c.345.372.721.706 1.127 1.001l.022.015c.212.162.398.337.566.528l.004.004c.158.186.347.339.56.454l.01.005v-.024h.048c-.039-.087-.102-.157-.18-.205l-.002-.001c-.079-.044-.147-.088-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798c-.049-.099-.083-.213-.096-.334v-.005c-.006-.115-.072-.214-.168-.265l-.002-.001c-.121.206-.255.384-.408.545l.001-.001c-.159.167-.289.364-.382.58l-.005.013c-.141.342-.244.739-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024-.024.024c-.26-.053-.474-.219-.59-.443l-.002-.005q-.182-.351-.326-.69c-.248-.637-.402-1.374-.423-2.144v-.009c-.009-.122-.013-.265-.013-.408 0-.666.105-1.308.299-1.91l-.012.044q.072-.266.314-.896t.097-.871c-.05-.165-.143-.304-.265-.41l-.001-.001c-.122-.106-.233-.217-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544c-.165-.382-.334-.861-.474-1.353l-.022-.089c-.159-.565-.336-1.043-.546-1.503l.026.064c-.111-.252-.24-.47-.39-.669l.006.008q-.244-.326-.436-.617-.244-.314-.484-.605c-.163-.197-.308-.419-.426-.657l-.009-.02c-.048-.097-.09-.21-.119-.327l-.002-.011c-.011-.035-.017-.076-.017-.117 0-.082.024-.159.066-.223l-.001.002c.011-.056.037-.105.073-.145.039-.035.089-.061.143-.072h.002c.085-.055.188-.088.3-.088.084 0 .165.019.236.053l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085c.081.154.163.343.234.536l.011.033q.097.278.217.57.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57.194.145.651.423t.484.52c-.114-.004-.249-.007-.384-.007-.492 0-.976.032-1.45.094l.056-.006c-.536.072-1.022.203-1.479.39l.04-.014c-.113.049-.248.094-.388.129l-.019.004c-.142.021-.252.135-.266.277v.001c.061.076.11.164.143.26l.002.006c.034.102.075.19.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005c.141.174.3.325.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399c.073.072.137.152.191.239l.003.005c.091.104.217.175.36.193h.003v-.048c-.088-.067-.153-.16-.184-.267l-.001-.004c-.025-.102-.062-.191-.112-.273l.002.004zm-18.576-19.205q-.194 0-.363.012c-.115.008-.222.029-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798.048-.024c.113-.082.2-.192.252-.321l.002-.005c.052-.139.082-.301.082-.469 0-.018 0-.036-.001-.054v.003c-.045-.044-.082-.096-.108-.154l-.001-.003-.081-.182c-.053-.084-.127-.15-.214-.192l-.003-.001c-.094-.045-.174-.102-.244-.169z">
                    </path>
                </g>
            </svg>               
            )
        },
        {
            name: 'Nginx',
            bgcolor: '#000000',
            svg: (
                <svg className="technology_svg" fill="#fff" viewBox="-1.5 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="m10.395 0-10.395 6v12l10.395 6 10.4-6v-12zm6 16.59c-.059.728-.664 1.296-1.402 1.296-.045 0-.089-.002-.133-.006h.006c-.008 0-.017 0-.026 0-.707 0-1.341-.313-1.771-.807l-.002-.003-6-7.141v6.66.014c0 .703-.568 1.273-1.271 1.276h-.08c-.71-.006-1.284-.58-1.29-1.289v-9.18c.049-.725.65-1.295 1.383-1.295.041 0 .082.002.122.005h-.005.039c.712 0 1.352.312 1.789.808l.002.003 5.97 7.141v-6.661c.006-.71.58-1.284 1.289-1.29h.076c.71.006 1.284.58 1.29 1.289v9.181z">
                        </path>
                    </g>
                </svg>
            )
        },
        {
            name: 'Java',
            bgcolor: '#FF79C9',
            svg: (
                <svg className="technology_svg" fill="#fff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <title>java</title>
                        <path d="M13.168 30.901c5.401 0.346 13.695-0.191 13.891-2.747 0 0-0.377 0.968-4.464 1.738-2.257 0.407-4.855 0.639-7.508 0.639-2.173 0-4.309-0.156-6.398-0.457l0.239 0.028c0-0.001 0.691 0.571 4.24 0.799zM19 1.004s3.117 3.117-2.955 7.91c-4.869 3.845-1.11 6.038-0.001 8.543-2.842-2.566-4.927-4.821-3.529-6.922 2.054-3.085 7.744-4.58 6.486-9.531zM22.393 22.978c5.627-2.924 3.025-5.735 1.21-5.355-0.249 0.047-0.465 0.107-0.674 0.182l0.030-0.009c0.119-0.167 0.283-0.296 0.474-0.369l0.007-0.002c3.593-1.263 6.356 3.725-1.16 5.701 0.046-0.041 0.084-0.090 0.111-0.145l0.001-0.003zM12.616 17.512s-5.451 1.295-1.929 1.764c0.948 0.078 2.052 0.122 3.166 0.122 1.424 0 2.831-0.073 4.218-0.214l-0.174 0.014c2.257-0.19 4.521-0.596 4.521-0.596-0.531 0.232-0.982 0.477-1.409 0.756l0.037-0.022c-5.535 1.456-16.228 0.779-13.149-0.71 1.357-0.703 2.963-1.115 4.665-1.115 0.019 0 0.038 0 0.057 0h-0.003zM25.16 26.627s0.849 0.699-0.933 1.238c-3.389 1.027-14.106 1.336-17.081 0.041-1.070-0.466 0.937-1.112 1.567-1.247 0.291-0.074 0.626-0.117 0.97-0.117 0.023 0 0.045 0 0.068 0.001l-0.003-0c-1.191-0.839-7.693 1.646-3.303 2.358 11.972 1.941 21.821-0.875 18.716-2.274zM17.395 15.344c0.314 0.377 0.505 0.868 0.505 1.402 0 0.719-0.346 1.358-0.88 1.759l-0.006 0.004s3.673-1.897 1.986-4.271c-1.576-2.214-2.784-3.314 3.758-7.108 0-0.001-10.267 2.563-5.363 8.214zM11.346 20.915s-1.285 0.951 0.677 1.155c0.859 0.108 1.852 0.169 2.86 0.169 1.826 0 3.605-0.202 5.315-0.585l-0.162 0.030c0.344 0.322 0.755 0.578 1.209 0.744l0.025 0.008c-7.097 2.076-15.004 0.162-9.925-1.522zM12.065 24.198s-1.146 0.667 0.816 0.892c0.719 0.107 1.548 0.168 2.392 0.168 1.354 0 2.671-0.157 3.934-0.455l-0.116 0.023c0.467 0.285 1.010 0.557 1.577 0.782l0.074 0.026c-5.872 2.516-13.287-0.147-8.676-1.436z">
                        </path>
                    </g>
                </svg>     
            )
        },
        {
            name: 'Ubuntu',
            bgcolor: '#DEDEFF',
            svg: (
                <svg className="technology_svg" fill="#493BD2" viewBox="-5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <title>ubuntu</title>
                        <path d="M16.469 9.375c-1.063-0.594-1.406-1.938-0.813-3 0.406-0.719 1.156-1.094 1.906-1.094 0.375 0 0.75 0.094 1.094 0.281 1.063 0.625 1.406 1.969 0.813 3-0.406 0.719-1.156 1.094-1.906 1.094-0.375 0-0.75-0.094-1.094-0.281zM21.938 15.594h-3.625c-0.125-1.688-0.969-3.188-2.25-4.156-0.219-0.156-0.438-0.313-0.688-0.469-0.813-0.438-1.75-0.688-2.75-0.688-1.031 0-1.969 0.25-2.813 0.719l-2-3.031c1.406-0.844 3.031-1.313 4.813-1.313 0.688 0 1.375 0.063 2.063 0.219-0.25 1.219 0.281 2.5 1.406 3.156 0.438 0.25 0.938 0.375 1.469 0.375 0.719 0 1.406-0.25 1.938-0.719 1.438 1.563 2.344 3.625 2.438 5.906zM7.125 8.438l2 3.031c-1.25 0.969-2.094 2.438-2.188 4.125-0.031 0.125-0.031 0.25-0.031 0.406 0 0.125 0 0.281 0.031 0.406 0.125 1.781 1.063 3.313 2.438 4.281l-1.906 3.094c-1.813-1.188-3.188-3-3.813-5.125 0.875-0.5 1.5-1.469 1.5-2.563s-0.625-2.094-1.563-2.594c0.594-2.063 1.844-3.844 3.531-5.063zM2.188 13.906c1.219 0 2.219 0.969 2.219 2.188s-1 2.219-2.219 2.219-2.188-1-2.188-2.219 0.969-2.188 2.188-2.188zM8.188 24.219l1.906-3.125c0.75 0.375 1.625 0.594 2.531 0.594 1 0 1.938-0.25 2.781-0.719 0.25-0.125 0.469-0.281 0.688-0.469 1.25-0.938 2.094-2.406 2.219-4.094h3.625c-0.094 2.375-1.094 4.531-2.656 6.125-0.469-0.344-1.063-0.531-1.656-0.531-0.531 0-1.031 0.125-1.469 0.375-1 0.594-1.531 1.656-1.469 2.719-0.688 0.156-1.375 0.25-2.063 0.25-1.625 0-3.125-0.406-4.438-1.125zM17.625 22.75c0.75 0 1.5 0.375 1.906 1.094 0.594 1.063 0.219 2.438-0.813 3.031-0.344 0.188-0.719 0.281-1.094 0.281-0.781 0-1.5-0.375-1.906-1.094-0.625-1.063-0.25-2.406 0.813-3.031 0.344-0.188 0.719-0.281 1.094-0.281z">
                        </path>
                    </g>
                </svg>
            )
        },
    ];
    return (
        <div id="technicalSkills">
            <div className='container-xxl d-none d-md-block' style={{ paddingTop: 50, paddingBottom: 50 }} ref={(el) => { skillsContainer = el }}>
                <div className='row row-cols-md-5 mb-5'>
                    {skillsData.slice(0,5).map((skill) => <TechnologiesCard key={skill.name} bgcolor={skill.bgcolor} svg={skill.svg} />)}
                </div>
                <div className='row px-5 mb-5'>
                    <div className='col-3'>
                        <TechnologiesCard bgcolor={skillsData[5].bgcolor} svg={skillsData[5].svg} />
                    </div>
                    <div className='col-6 d-flex justify-content-center align-items-center'>
                        <div className='text-center'>
                            <h2 className="font-manrope fw-medium text-center mb-1" style={{ 'fontSize': '31px' }}>technologies we work with.</h2>
                            <p className='text-center mb-4' style={{color: '#bbbbbb'}}>(and more)</p>
                            {/* <Link type="button d-block mx-auto" className="btn btn-danger bg-red border-red font-manrope fw-semibold rounded-pill px-4 py-3" style={{ 'whiteSpace': 'nowrap', 'fontSize': '18px' }} to={'/projects'}>view all</Link> */}
                        </div>
                    </div>
                    <div className='col-3'>
                        <TechnologiesCard bgcolor={skillsData[6].bgcolor} svg={skillsData[6].svg} />
                    </div>
                </div>
                <div className='row row-cols-md-5 mb-5'>
                    {skillsData.slice(7,12).map((skill) => <TechnologiesCard key={skill.name} bgcolor={skill.bgcolor} svg={skill.svg} />)}
                </div>
            </div>
            <div className='container-xxl d-block d-md-none' style={{ paddingTop: 50, paddingBottom: 50 }}>
                <div className='text-center'>
                            <h2 className="font-manrope fw-medium text-center mb-1" style={{ 'fontSize': '31px' }}>technologies I'm familiar with.</h2>
                            <p className='text-center mb-4' style={{color: '#bbbbbb'}}>(and more)</p>
                            <Link type="button d-block mx-auto" className="btn btn-danger bg-red border-red font-manrope fw-semibold rounded-pill px-4 py-3" style={{ 'whiteSpace': 'nowrap', 'fontSize': '18px' }} to={'/projects'}>view all</Link>
                </div>
                <div className='row row-cols-2 mb-5'>
                    {skillsData.map((skill) => <TechnologiesCard key={skill.name} bgcolor={skill.bgcolor} svg={skill.svg} />)}
                </div>
            </div>
        </div>
    )
}

export default Technologies;