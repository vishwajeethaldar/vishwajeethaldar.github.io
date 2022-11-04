const root = process.env.PUBLIC_URL
export const  projectinformations = [
    {
            id:1,
            projectTitle:"DNA India Clone",
            type:"Individual Project",
            techstack:[
                {
                    id:1,
                    title:"HTML5",
                    image:`${root}/logo/html5.svg`,
                },
                {
                    id:2,
                    title:"CSS3",
                    image:`${root}/logo/css3.svg`,

                },
                {
                    id:3,
                    title:"JavaScript",
                    image:`${root}/logo/js.svg`,

                },
                {
                    id:4,
                    title:"React",
                    image:`${root}/logo/react.svg`,

                },
                {
                    id:5,
                    title:"Chakra UI",
                    image:`${root}/logo/chakra-ui.png`,

                }
                
            ],
          
            images:[`${root}/projectImages/dnaindia/1.jpg`, `${root}/projectImages/dnaindia/2.jpg`,`${root}/projectImages/dnaindia/3.jpg`, `${root}/projectImages/dnaindia/4.jpg`],
            description:"DNA India is online news portal which covers all latest and breaking news on Politics, Business, Sports, Bollywood, Technology, Healgth, from all over the world.",
            links:[
                {
                linkTitle:"GitHub",
                link:"https://github.com/vishwajeethaldar/upbeat-eggnog-8021"
                },
                {
                linkTitle:"Live",
                link:"https://upbeat-eggnog-8021.netlify.app/"
                },
                {
                linkTitle:"Offical Website",
                link:"https://www.dnaindia.com/"
                }
           ],
                        
    },
    {
        id:2,
        projectTitle:"CrickBuzz Clone",
        type:"Group Project",
        
        techstack:[
            {
                id:1,
                title:"HTML5",
                image:`${root}/logo/html5.svg`,
            },
            {
                id:2,
                title:"CSS3",
                image:`${root}/logo/css3.svg`,

            },
            {
                id:3,
                title:"JavaScript",
                image:`${root}/logo/js.svg`,

            }
            
        ],
        images:[`${root}/projectImages/crickbuzz/1.jpg`, `${root}/projectImages/crickbuzz/2.jpg`,`${root}/projectImages/crickbuzz/3.jpg`, `${root}/projectImages/crickbuzz/4.jpg`],
        description:"Cricbuzz is an Indian cricket news website owned by Times Internet. It features, news, articles and live coverage of cricket matches including videos, text commentary, player stats and team rankings. Their website also offers a mobile app.",
        links:[
            {
            linkTitle:"GitHub",
            link:"https://github.com/vishwajeethaldar/upbeat-eggnog-8021"
            },
            {
            linkTitle:"Live",
            link:"https://vishwajeethaldar.github.io/crickbuzz-clone"
            },
            {
            linkTitle:"Offical Website",
            link:"https://www.cricbuzz.com/"
            }
       ],
    },
    {
        id:3,
        projectTitle:"Wrike Clone",
        type:"Group Project",
        
        techstack:[
            {
                id:1,
                title:"HTML5",
                image:`${root}/logo/html5.svg`,
            },
            {
                id:2,
                title:"CSS3",
                image:`${root}/logo/css3.svg`,

            },
            {
                id:3,
                title:"JavaScript",
                image:`${root}/logo/js.svg`,

            }
            
        ],
        images:[`${root}/projectImages/wrike/1.jpg`, `${root}/projectImages/wrike/2.jpg`,`${root}/projectImages/wrike/3.jpg`, `${root}/projectImages/wrike/4.jpg`],
        description:"Wrike, Inc. is an American project management application service provider based in San Jose, California. Wrike also has offices in Dallas, Tallin, Nicosia, Dublin, Tokyo, Melbourne and Prague.",
        links:[
            {
            linkTitle:"GitHub",
            link:"https://github.com/vishwajeethaldar/wrike-clone"
            },
            {
            linkTitle:"Live",
            link:"https://vishwajeethaldar.github.io/wrike-clone/"
            },
            {
            linkTitle:"Offical Website",
            link:"https://www.wrike.com/"
            }
       ],
    }
]