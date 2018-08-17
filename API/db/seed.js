use timelinedb
db.dropDatabase()

db.timeline_women.insert([
  {
    name:'Ada Lovelace',
    year: 1842,
    dob:1815,
    dod:1851,
    info:"was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine.",
    contribution: "As a result, she is sometimes regarded as the first to recognise the full potential of a computing machine and the first computer programmer",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/1024px-Ada_Lovelace_portrait.jpg",
    wiki:"https://en.wikipedia.org/wiki/Ada_Lovelace"
  },
  {
    name:"Henrietta Swan Leavitt",
    year:1893,
    dob:1868,
    dod:1921,
    info:"was an American astronomer who discovered the relation between the luminosity and the period of Cepheid variable stars. A graduate of Radcliffe College, Leavitt started working at the Harvard College Observatory as a computer in 1893, examining photographic plates in order to measure and catalog the brightness of the stars. Though she received little recognition in her lifetime, it was her discovery that first allowed astronomers to measure the distance between the Earth and faraway galaxies. She explained her discovery: A straight line can readily be drawn among each of the two series of points corresponding to maxima and minima, thus showing that there is a simple relation between the brightness of the variables and their periods.",
    contribution:"After Leavitt's death, Edwin Hubble used the luminosity–period relation for Cepheids, together with spectral shifts first measured by fellow astronomer, Vesto Slipher, at Lowell Observatory to determine that the universe is expanding (see Hubble's law).",
    image:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Leavitt_aavso.jpg",
    wiki:"https://en.wikipedia.org/wiki/Henrietta_Swan_Leavitt"
  },
  {
    name:"Grete Hermann",
    year:1926,
    dob:1901,
    dod:1984,
    info:"was a German mathematician and philosopher noted for her work in mathematics, physics, philosophy and education. She is noted for her early philosophical work on the foundations of quantum mechanics, and is now known most of all for an early, but long-ignored critique of a no-hidden-variable theorem by John von Neumann. It has been suggested that, had her critique not remained nearly unknown for decades, the historical development of quantum mechanics might have been very different.",
    contribution:"published the foundational paper for computerized algebra. It was her doctoral thesis, titled The Question of Finitely Many Steps in Polynomial Ideal Theory, and published in Mathematische Annalen.",
    image:"https://upload.wikimedia.org/wikipedia/en/e/ea/Grete_Hermann.jpg",
    wiki:"https://en.wikipedia.org/wiki/Grete_Hermann"
  },
  {
    name:"",
    year:1940,
    dob:1943,
    dod:1945,
    info:"American women were recruited to do ballistics calculations and program computers during WWII. Around 1943–1945, these women 'computers' used a differential analyzer in the basement of the Moore School of Electrical Engineering to speed up their calculations, though the machine required a mechanic to be totally accurate and the women often rechecked the calculations by hand. Phyllis Fox ran a differential analyzer single-handedly, with differential equations are her program specification",
    contribution:"",
    image:"http://monovisions.com/wp-content/uploads/2016/02/american-women-in-world-war-ii-vintage-photos-06-1040x440.jpg",
    wiki:"https://en.wikipedia.org/wiki/American_women_in_World_War_II"
  },
  {
    name:"",
    year:1943,
    dob: null,
    dod: null,
    info:"Women worked as WREN Colossus operators during WW2 at Bletchley Park.",
    contribution:"",
    image:"https://i.pinimg.com/originals/6c/83/87/6c83870098d9c137c3ef32e6fc10d1f3.jpg",
    wiki:"https://en.wikipedia.org/wiki/Bletchley_Park"
  },
  {
    name:"",
    year:1943,
    dob: null,
    dod: null,
    info:"Wives of scientists working on the Manhattan Project with mathematical training were hired as human computers to work on the ENIAC and MANIAC I computers.[11] This included Klara Dan von Neumann, Augusta H. Teller, and Adele Goldstine.",
    contribution:"",
    image:"https://en.wikipedia.org/wiki/Manhattan_Project#/media/File:Y12_Calutron_Operators.jpg",
    wiki:"https://en.wikipedia.org/wiki/Calutron_Girls"
  },
  {
    name:"Gertrude Blanch",
    year:1943,
    dob:1896,
    dod:1996,
    info:"was an American mathematician who did pioneering work in numerical analysis and computation. She was a leader of the Mathematical Tables Project in New York from its beginning. She worked later as the assistant director and leader of the Numerical Analysis at UCLA computing division and was head of mathematical research for the Aerospace Research Laboratory at Wright-Patterson Air Force Base in Dayton, Ohio.",
    contribution:"led the Mathematical Tables Project group from 1938 to 1948. During World War II, the project operated as a major computing office for the U.S. government and did calculations for the Office of Scientific Research and Development, the Army, the Navy, the Manhattan Project and other institutions.",
    image:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Gertrude_blanch.jpg",
    wiki:"https://en.wikipedia.org/wiki/Gertrude_Blanch"
  },
  {
    name:"Betty Jennings, Betty Snyder, Frances Spence, Kay McNulty, Marlyn Wescoff, Ruth Lichterman",
    year:1946,
    dob:null,
    dod:null,
    info:"",
    contribution:"were the regularly working programmers of the ENIAC. Adele Goldstine, also involved in the programming, wrote the program manual for the ENIAC.",
    image:"https://i.pinimg.com/originals/d7/7b/b8/d77bb8e85c96ca7377bf08a73b152932.jpg",
    wiki:"https://en.wikipedia.org/wiki/ENIAC"
  },
  {
    name:"Irma Wyman",
    year:1947,
    dob:1928,
    dod:2015,
    info:"was an early computer engineer and the first woman to become vice president of Honeywell, Inc. She was a systems thinking tutor and was the first female CIO of Honeywell.",
    contribution:"worked on a missile guidance project at the Willow Run Research Center. To calculate trajectory, they used mechanical calculators. In 1947–48, she visited the U.S. Naval Proving Ground where Grace Hopper was working on similar problems and discovered they were using a prototype of a programmable Mark II computer.",
    image:"http://stmedia.stimg.co/ows_144840862781762.jpg?w=2000",
    wiki:"https://en.wikipedia.org/wiki/Irma_Wyman"
  },
  {
    name:"Kathleen Booth",
    year:1948,
    dob:1922,
    dod:null,
    info:"wrote the first assembly language and designed the assembler and autocode for the first computer systems at Birkbeck College, University of London. She helped design three different machines including the ARC, SEC, and APE(X)C.",
    contribution:"is credited with writing the assembly language for the ARC2 computer.",
    image:"http://www.computinghistory.org.uk/userdata/images/large/31/28/product-83128.jpg",
    wiki:"https://en.wikipedia.org/wiki/Kathleen_Booth"
  },
  {
    name:"Grace Hopper",
    year:1949,
    dob:1906,
    dod:1992,
    info:"was an American computer scientist and United States Navy rear admiral.One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early high-level programming language still in use today.",
    contribution:"was a United States Navy officer and one of the first programmers of the Harvard Mark I, known as the 'Mother of COBOL'. She developed the first compiler for an electronic computer, known as A-0. She also popularized the term 'debugging' – a reference to a moth extracted from a relay in the Harvard Mark II computer.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/440px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
    wiki:"https://en.wikipedia.org/wiki/Grace_Hopperv"
  },
  {
    name:"Evelyn Boyd Granville",
    year: 1949,
    dob:1924,
    dod:null,
    info:"was the second African-American woman to receive a Ph.D. in mathematics from an American University she earned it in 1949 from Yale University (she attended Smith College before Yale). She performed pioneering work in the field of computing.",
    contribution:"was the second African-American woman in the U.S. to receive a PhD in mathematics. From 1956 to 1960, she worked for IBM on the Project Vanguard and Project Mercury space programs, analyzing orbits and developing computer procedures.",
    image:"https://upload.wikimedia.org/wikipedia/commons/5/55/Granville_evelyn.jpg",
    wiki:"https://en.wikipedia.org/wiki/Evelyn_Boyd_Granville"
  },
  {
    name:"Ida Rhodes",
    year:1950,
    dob:1900,
    dod:1986,
    info:"was an American mathematician who became a member of the clique of influential women at the heart of early computer development in the United States",
    contribution:"was one of the pioneers in the analysis of systems of programming. She co-designed the C-10 language in the early 1950s for the UNIVAC I – a computer system that was used to calculate the census.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ida_Rhodes_filming_at_IBM_002.jpg/1497px-Ida_Rhodes_filming_at_IBM_002.jpg",
    wiki:"https://en.wikipedia.org/wiki/Ida_Rhodes"
  },
  {
    name:"Mary Coombs",
    year:1952,
    dob:1929,
    dod:null,
    info:"is recognised as being the first female commercial programmer, she was the first woman to work on the LEO computers.Her father, William Blood, believed in women's education and her sister worked in microbiology and bacteriology. Unlike her sister, and unlike others in computing, she did not have a background in maths or science.The National Museum of Computing documents her contribution.She graduated with a degree in French from Queen Mary University in London.She later moved to Surrey, when her father became a Medical Officer for the catering company, J. Lyons and Co. He was clear that women should have their own careers and interests.",
    contribution:"was one of the first programmers on, and was the first female programmer on LEO, the first business computer. She went on to work on LEO II and LEO III.",
    image:"https://www.bl.uk/voices-of-science/britishlibrary/~/media/bl/websites/vos/images/interviewees/021i-c1379x0016xx-0001a1.jpg?backgroundColor=000000&as=false",
    wiki:"https://en.wikipedia.org/wiki/Mary_Coombs"
  },
  {
    name:"",
    year:1958,
    dob:null,
    dod:null,
    info:"",
    contribution:"Orbital calculations for the United States' Explorer 1 satellite were solved by the NASA Jet Propulsion Laboratory's all-female 'computers', many of whom were recruited out of high school. Mechanical calculators were supplemented with logarithmic calculations performed by hand.",
    image:"https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/computers.jpg",
    wiki:"https://en.wikipedia.org/wiki/Women_in_NASA"
  },
  {
    name:"Dana Ulery",
    year:1961,
    dob: 1938,
    dod:null,
    info:"is an American computer scientist and pioneer in scientific computing applications. She began her career in 1961 as the first woman engineer at the NASA Jet Propulsion Laboratory (Pasadena, CA), designing and developing algorithms to model NASA’s Deep Space Network capabilities and automating real-time tracking systems for the Ranger and Mariner space missions using a North American Aviation Recomp II, 40-bit word size computer.Over the course of her career, she has held positions as an applied science and technology researcher and manager in industry, academia, and government.In 2007, she retired from her position as Chief Scientist of the Computational and Information Sciences Directorate at the United States Army Research Laboratory(ARL).",
    contribution:"was the first female engineer at Jet Propulsion Laboratory, developing real-time tracking systems using a North American Aviation Recomp II, a 40-bit word size computer",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dana_Ulery.jpg/440px-Dana_Ulery.jpg",
    wiki:"https://en.wikipedia.org/wiki/Dana_Ulery"
  },
  {
    name:"Jean E. Sammet",
    year:1962,
    dob:1928,
    dod:2017,
    info:"was an American computer scientist who developed the FORMAC programming language in 1962. She was also one of the developers of the influential COBOL programming language.",
    contribution:"developed the FORMAC programming language. She was also the first to write extensively about the history and categorization of programming languages in 1969, and became the first female president of the Association for Computing Machinery in 1974.",
    image:"https://upload.wikimedia.org/wikipedia/en/b/b3/Jean_E._Sammet.jpg",
    wiki:"https://en.wikipedia.org/wiki/Jean_E._Sammet"
  },
  {
    name:"Dame Stephanie 'Steve' Shirley",
    year:1962,
    dob:1933,
    dod:null,
    info:"is a British information technology pioneer, businesswoman and philanthropist.",
    contribution:"founded the UK software company F.I. She was concerned with creating work opportunities for women with dependents, and predominantly employed women, only 3 out of 300-odd programmers were male, until that became illegal. She adopted the name 'Steve' to help her in the male-dominated business world. From 1989 to 1990, she was president of the British Computer Society. In 1985, she was awarded a Recognition of Information Technology Award.",
    image:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Dame_Stephanie_Shirley_-_2013.jpg",
    wiki:"https://en.wikipedia.org/wiki/Steve_Shirley"
  },
  {
    name:"Joan Ball",
    year: 1964,
    dob:null,
    dod:null,
    info:"was the first person to start a computer dating service in 1964.",
    contribution:"was a computer dating pioneer who started the first computer dating service in England, in 1964. Ball's computer dating service also pre-dated the earliest American computer dating services, like Operation Match at Harvard.",
    image:"http://www.hamhigh.co.uk/polopoly_fs/1.3979028.1425477499!/image/image.jpg_gen/derivatives/landscape_630/image.jpg",
    wiki:"https://en.wikipedia.org/wiki/Joan_Ball"
  },
  {
    name:"Mary Allen Wilkes",
    year: 1965,
    dob:1937,
    dod:null,
    info:"is a former computer programmer and logic designer, most known for her work with the LINC computer, now recognized by many as the world's first personal computer.Wilkes graduated from Wellesley College in 1959 where she majored in philosophy and theology.At that time she wanted to become a lawyer but was discouraged by friends and mentors because she was a woman. She sought work in the computer field partly because computer programming was a field that was open to women and partly because her geography teacher in the eighth grade had told her during a class discussion, 'Mary Allen, when you grow up, you ought to be a computer programmer.'She had no idea at the time what that meant, but she never forgot it. She finally became an attorney in 1975.",
    contribution:"was the first person to use a computer in a private home (in 1965) and the first developer of an operating system (LAP) for the first minicomputer (LINC).",
    image:"https://upload.wikimedia.org/wikipedia/commons/b/be/Mary_Allen_Wilkes_Portrait.jpeg",
    wiki:"https://en.wikipedia.org/wiki/Mary_Allen_Wilkes"
  },
  {
    name:"Sister Mary Kenneth Keller",
    year: 1965,
    dob: 1913,
    dod: 1985,
    info:"was an American Roman Catholic religious sister, educator and pioneer in computer science. She was the first woman to earn a Ph.D. in computer science in the United States.",
    contribution:"became the first American woman to earn a Ph.D. in Computer Science in 1965.[26] Her thesis was titled 'Inductive Inference on Computer Generated Patterns.'",
    image:"http://www.computinghistory.org.uk/userdata/images/large/67/14/product-96714.jpg",
    wiki:"https://en.wikipedia.org/wiki/Mary_Kenneth_Keller"
  },
  {
    name:"Margaret R. Fox",
    year:1966,
    dob: 1916,
    dod: 2006,
    info:"was an American electronics engineer and computer scientist born in 1916. She was the Chief of the Office of Computer Information, part of the Institute for Computer Science and Technology of the National Bureau of Standards (now the National Institute of Standards and Technology) from 1966 to 1975 and was the first secretary of the American Federation of Information Processing Societies.",
    contribution:"was appointed Chief of the Office of Computer Information in 1966, part of the Institute for Computer Science and Technology of NBS. She held the post until 1975. She was also actively involved in the Association for Computing Machinery (ACM) and served as the first Secretary for the American Federation of Information Processing Societies (AFIPS)",
    image:"https://www.women.cs.cmu.edu/ada/Resources/Women/pictures/margaret_fox.jpg",
    wiki:"https://en.wikipedia.org/wiki/Margaret_R._Fox"
  },
  {
    name:"Vera Molnár",
    year: 1968,
    dob:1924,
    dod:null,
    info:"is a French media artist of Hungarian origin. She is considered a pioneer of computer art.",
    contribution:"is one of the pioneers of computer and algorithmic arts. In 1968 she began working with computers, where she began to create algorithmic drawings based on simple geometric shapes geometrical themes.",
    image:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Vera_Moln%C3%A1r_%281996%29.png",
    wiki:"https://en.wikipedia.org/wiki/Vera_Moln%C3%A1r"
  },
  {
    name:"Margaret Hamilton",
    year: 1969,
    dob:1936,
    dod:null,
    info:"was an American electronics engineer and computer scientist born in 1916.She was the Chief of the Office of Computer Information, part of the Institute for Computer Science and Technology of the National Bureau of Standards (now the National Institute of Standards and Technology) from 1966 to 1975 and was the first secretary of the American Federation of Information Processing Societies.",
    contribution:"was in late 1960s Director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for the Apollo space program. MIT work prevented an abort of the Apollo 11 moon landing by using robust architecture. Later, she was awarded the NASA Exceptional Space Act Award for her scientific and technical contributions.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Margaret_Hamilton_1995.jpg/440px-Margaret_Hamilton_1995.jpg",
    wiki:"https://en.wikipedia.org/wiki/Margaret_R._Fox"
  },
  {
    name:"Erna Schneider Hoover",
    year: 1971,
    dob: 1926,
    dod:null,
    info:"is an American mathematician notable for inventing a computerized telephone switching method which 'revolutionized modern communication' according to several reports.It prevented system overloads by monitoring call center traffic and prioritizing tasks on phone switching systems to enable more robust service during peak calling times.At Bell Laboratories where she worked for over 32 years, Hoover was described as an important pioneer for women in the field of computer technology.",
    contribution:"is an American mathematician notable for inventing a computerized telephone switching method which developed modern communication according to several reports. At Bell Laboratories, where she worked for over 32 years, Hoover was described as an important pioneer for women in the field of computer technology.",
    image:"https://imgix.ranker.com/user_node_img/48/951485/original/erna-schneider-hoover-all-people-photo-u1?w=280&h=280&fit=crop&crop=faces&q=50&fmt=jpg",
    wiki:"https://en.wikipedia.org/wiki/Erna_Schneider_Hoover"
  },
  {
    name:"Margaret Burnett",
    year:1971,
    dob:1949,
    dod:null,
    info:"",
    contribution:"became the first woman software developer ever hired by Procter & Gamble/Ivorydale, a 13,000-employee complex that included their R&D center. Her position as a software developer also made her the first woman ever hired into a management-level position there.",
    image:"https://static1.squarespace.com/static/572a35ec22482ec861189ccc/t/595c873217bffc06e057711f/1499236163626/?format=500w",
    wiki:"http://eecs.oregonstate.edu/people/burnett-margaret"
  },
  {
    name:"Mary Shaw",
    year:1972,
    dob:1943,
    dod:null,
    info:"is an American software engineer, and the Alan J. Perlis Professor of Computer Science in the School of Computer Science at Carnegie Mellon University, known for her work in the field of software architecture.",
    contribution:"became the first woman to earn a Ph.D. in Computer Science from Carnegie Mellon University.",
    image:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Mary-shaw.png",
    wiki:"https://en.wikipedia.org/wiki/Mary_Shaw_(computer_scientist)"
  },
  {
    name:"Adele Goldberg",
    year:1972,
    dob: 1945,
    dod:null,
    info:"is a computer scientist who participated in developing the programming language Smalltalk-80 and various concepts related to object-oriented programming while a researcher at the Xerox Palo Alto Research Center (PARC), in the 1970s.",
    contribution:"was one of developers of the Smalltalk language.",
    image:"https://upload.wikimedia.org/wikipedia/commons/3/36/Adele_Goldberg_at_PyCon_2007.jpg",
    wiki:"https://en.wikipedia.org/wiki/Adele_Goldberg_(computer_scientist)"
  },
  {
    name:"Karen Spärck Jones",
    year:1972,
    dob:1935,
    dod:2007,
    info:"was a British computer scientist who was responsible for the concept of inverse document frequency, a technology that underlies most modern search engines.",
    contribution:"was one of the pioneers of information retrieval and natural language processing.",
    image:"https://upload.wikimedia.org/wikipedia/commons/a/af/Karen_Sp%C3%A4rck.jpg",
    wiki:"https://en.wikipedia.org/wiki/Karen_Sp%C3%A4rck_Jones"
  },
  {
    name:"Sandra Kurtzig",
    year:1972,
    dob:null,
    dod:null,
    info:"is an American businesswoman and technology entrepreneur. She was one of Silicon Valley's first female entrepreneurs, and as the founder of the business and manufacturing software producer ASK Group in 1972, was the first woman to take a Silicon Valley technology company public.",
    contribution:"founded ASK Computer Systems, an early Silicon Valley startup",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Sandra_Kurtzig_in_2014.jpg/1024px-Sandra_Kurtzig_in_2014.jpg",
    wiki:"https://en.wikipedia.org/wiki/Sandra_Kurtzig"
  },
  {
    name:"Susan Nycum",
    year:1973,
    dob:null,
    dod:null,
    info:"is a lawyer who specialises in computer security and intellectual property issues. She worked at the law firm of Chickering and Gregory in San Francisco[1] and then became a partner at the law firm Baker & McKenzie[2] where she headed its IT and intellectual property group. She was a fellow of the Association for Computing Machinery and a member of its council. She was an early member of its special interest group for higher education, SIGUCCS, and was inducted into its hall of fame in 2004.[3][4] She was Chairwoman of the National Information Systems Advisory Panel in the early 1980s.",
    contribution:"co-authored Computer Abuse, a minor classic that was one of the first studies to define and document computer-related crime.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Susan_Nycum"
  },
  {
    name:"Phyllis Fox",
    year:1973,
    dob:1923,
    dod:null,
    info:"is an American mathematician and computer scientist.",
    contribution:"worked on the PORT portable mathematical/numerical library.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Phyllis_Fox"
  },
  {
    name:"Elizabeth Feinler",
    year:1974,
    dob:1931,
    dod:null,
    info:"is an American information scientist. From 1972 until 1989 she was director of the Network Information Systems Center at the Stanford Research Institute (SRI International). Her group operated the Network Information Center (NIC) for the ARPANET as it evolved into the Defense Data Network (DDN) and the Internet.",
    contribution:"and her team defined a simple text file format for Internet host names.The list evolved into the Domain Name System and her group became the naming authority for the top-level domains of .mil, .gov, .edu, .org, and .com.",
    image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg",
    wiki:"https://en.wikipedia.org/wiki/Elizabeth_J._Feinler"
  },
  {
    name:"Irene Grief",
    year:1975,
    dob:null,
    dod:null,
    info:"is an American computer scientist and a founder of the field of Computer-Supported Cooperative Work (CSCW).[1] She was the first woman to earn a Ph.D. in computer science from the Massachusetts Institute of Technology.",
    contribution:"became the first woman to earn a Ph.D. in computer science from the Massachusetts Institute of Technology.",
    image:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Irene_Greif_2009.jpg",
    wiki:"https://en.wikipedia.org/wiki/Irene_Greif"
  },
  {
    name:"Sophie Wilson",
    year:1978,
    dob:1957,
    dod:null,
    info:"is a British computer scientist and software engineer. Wilson designed the Acorn Micro-Computer, the first of a long line of computers sold by Acorn Computers Ltd, including its programming language BBC BASIC.[6] Wilson later designed the instruction set of the ARM processor, which is used in most 21st-century smartphones.",
    contribution:"is a British computer scientist. She is known for designing the Acorn Micro-Computer, as well as the instruction set of the ARM processor.",
    image:"https://upload.wikimedia.org/wikipedia/commons/b/b3/Sophie_Wilson.jpg",
    wiki:"https://en.wikipedia.org/wiki/Sophie_Wilson"
  },
  {
    name:"Patricia Selinger",
    year:1979,
    dob:null,
    dod:null,
    info:"is an American computer scientist and IBM Fellow, best known for her work on relational database management systems.",
    contribution:"was one of the key architects of IBM System R, and in 1979 wrote the canonical paper on relational query optimization. She was appointed an IBM Fellow in 1994, and an ACM Fellow in 2009.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Patricia_Selinger"
  },
  {
    name:"Carol Shaw",
    year:1979,
    dob:1955,
    dod:null,
    info:"is a former video game designer, notable for being one of the first female designers in the video game industry. While working at Atari, Inc. in 1978, Shaw designed the unreleased Polo game[1] and designed 3-D Tic-Tac-Toe the same year,both for the Atari 2600. Shaw's official job title at Atari was Microprocessor Software Engineer.Later she joined Activision, where she programmed her best-known game, River Raid.According to the River Raid manual, she is also a 'scholar in the field of Computer Science.'",
    contribution:"was a game designer and programmer for Atari Corp. and Activision.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Carol_Shaw"
  },
  {
    name:"Carla Meninsky",
    year:1980,
    dob:null,
    dod:null,
    info:"is former video game designer and programmer during the early years of the Atari VCS.Along with Carol Shaw (creator of 3-D Tic-Tac-Toe and River Raid), Meninsky was one of two female engineers at Atari, Inc. to develop video game cartridges.She later became an intellectual property lawyer.",
    contribution:"was the game designer and programmer for Atari 2600 games Dodge 'Em and Warlords.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Carla_Meninsky"
  },
  {
    name:"Lorinda Cherry",
    year:1982,
    dob:null,
    dod:null,
    info:"is a computer programmer. She received her Masters in computer science from Stevens Institute of Technology in 1969. She joined Bell Labs in 1972 as an assembly language programmer, and worked there on the Unix operating system for several years.Cherry has prepared a 'pocket reference' which is commonly known as the 'Purple Card'.",
    contribution:"worked on the Writer's Workbench (wwb) for Bell Labs.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Lorinda_Cherry"
  },
  {
    name:"Janese Swanson",
    year:1983,
    dob:1958,
    dod:null,
    info:"is an American inventor and software developer. Swanson co-developed the first of the Carmen Sandiego educational games, and founded the company Girl Tech,which creates products aimed at making technology more interesting for girls. She has developed award-winning curricula, electronic toys, and books that encourage girls to explore technology and inventions. Her toy inventions include the Snoop Stopper Keepsake Box, Me-Mail Message Center, Zap N’ Lock Journal, and Swap-It Locket. Her publications include Tech Girl's Internet Adventures, Tech Girl's Activity Book, and Girlzine: A Magazine for the Global Girl.",
    contribution:"(with others) developed the first of the Carmen Sandiego games. She went on to found Girl Tech. Girl Tech develops products and services that encourage girls to use new technologies, such as the Internet and video games.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Janese_Swanson"
  },
  {
    name:"Roberta Williams",
    year:1984,
    dob:1953,
    dod:null,
    info:"is an American video game designer, writer, and a co-founder of Sierra On-Line (later known as Sierra Entertainment), who developed her first game while living in Simi Valley, California. She is most famous for her work in the field of graphic adventure games with titles such as Mystery House, the King's Quest series, and Phantasmagoria. She is married to Ken Williams and retired from her career in 1999. Roberta Williams is one of the most influential PC game designers of the 1980s and 1990s, and has been credited with creating the graphic adventure genre.",
    contribution:"did pioneering work in graphical adventure games for personal computers, particularly the King's Quest series.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Roberta_Williams"
  },
  {
    name:"Susan Kare",
    year: 1984,
    dob:1954,
    dod:null,
    info:"is an artist and graphic designer who created many of the interface elements and typefaces for the Apple Macintosh in the 1980s. She was also Creative Director (and one of the original employees) at NeXT, the company formed by Steve Jobs after he left Apple in 1985.She has worked for Microsoft and IBM, and, more recently, Pinterest and Facebook.",
    contribution:"created the icons and many of the interface elements for the original Apple Macintosh in the 1980s,and was an original employee of NeXT, working as the Creative Director.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Susan_Kare"
  },
  {
    name:"Radia Perlman",
    year:1985,
    dob:1951,
    dod:null,
    info:"is an American computer programmer and network engineer. She is most famous for her invention of the spanning-tree protocol (STP), which is fundamental to the operation of network bridges, while working for Digital Equipment Corporation. She also made large contributions to many other areas of network design and standardization, such as link-state routing protocols. More recently she has invented the TRILL protocol to correct some of the shortcomings of spanning-trees. She is currently employed by Dell EMC.",
    contribution:"invented the Spanning Tree Protocol. She has done extensive and innovative research, particularly on encryption and networking. She received the USENIX Lifetime Achievement Award in 2007, among numerous others.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Radia_Perlman_2009.jpg/800px-Radia_Perlman_2009.jpg",
    wiki:"https://en.wikipedia.org/wiki/Radia_Perlman"
  },
  {
    name:"Irma Wyman",
    year:1985,
    dob:1927,
    dod:null,
    info:"was an early computer engineer and the first woman to become vice president of Honeywell, Inc. She was a systems thinking tutor and was the first female CIO of Honeywell.",
    contribution:"was the first Honeywell CIO.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Irma_Wyman"
  },
  {
    name:"Monica S. Lam",
    year:1987,
    dob:null,
    dod:null,
    info:"is a professor in the Computer Science Department at Stanford, and founder of Moka5 and Omlet.",
    contribution:"receives a Ph.D. for her work on optimising compilers. She has since then performed influential research in many areas of computer science as well as co-authored a famous textbook on compilers.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Monica_S._Lam"
  },
  {
    name:"Éva Tardos",
    year:1988,
    dob:1957,
    dod:null,
    info:"is a Hungarian mathematician and the Jacob Gould Schurman Professor of Computer Science at Cornell University. Tardos's research interest is algorithms. Her work focuses on the design and analysis of efficient methods for combinatorial optimization problems on graphs or networks. She has done some work on network flow algorithms like approximation algorithms for network flows, cut, and clustering problems. Her recent work focuses on algorithmic game theory and simple auctions.",
    contribution:"was the recipient of the Fulkerson Prize for her research on design and analysis of algorithms.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Elisabeth_Bauer_and_Eva_Tardos_at_Cornell.jpg/1920px-Elisabeth_Bauer_and_Eva_Tardos_at_Cornell.jpg",
    wiki:"https://en.wikipedia.org/wiki/%C3%89va_Tardos"
  },
  {
    name:"Frances E. Allen",
    year:1989,
    dob:1932,
    dod:null,
    info:"s an American computer scientist and pioneer in the field of optimizing compilers. Allen was the first female IBM Fellow and in 2006 became the first woman to win the Turing Award.Her achievements include seminal work in compilers, program optimization, and parallelization.",
    contribution:"became the first female IBM Fellow in 1989. In 2006, she became the first female recipient of the ACM's Turing Award.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Allen_mg_2528-3750K-b.jpg/1920px-Allen_mg_2528-3750K-b.jpg",
    wiki:"https://en.wikipedia.org/wiki/Frances_E._Allen"
  },
  {
    name:"Frances Brazier",
    year:1989,
    dob:null,
    dod:null,
    info:"",
    contribution:"professor of Computer Science at the Vrije Universiteit in Amsterdam, is one of the founder of NLnet, the first Internet service provider in the Netherlands.",
    image:"",
    wiki:""
  },
  {
    name:"Donna Dubinsky",
    year:1992,
    dob:1995,
    dod:null,
    info:"is an American businesswoman who played an integral role in the development of personal digital assistants (PDAs) serving as CEO of Palm, Inc. and co-founding Handspring with Jeff Hawkins in 1995. Dubinsky co-founded Numenta in 2005 with Hawkins and Dileep George, based in Redwood City, CA. Numenta was founded to develop machine intelligence based on the principles of the neocortex. Dubinsky currently serves as CEO and board chair of Numenta. She served on the board of Yale University from 2006-2018, including two years as Senior Fellow. Fortune nominated her, together with Hawkins, to the Innovators Hall of Fame, while TIME named the pair as part of its Digital 50 in 1999 for their contribution to the development of the PDA.",
    contribution:"CEO and co-founder of Palm, Inc., co-founder of Handspring, co-founder of Numenta, Harvard Business School's Alumni Achievement Award winner for 'introducing the first successful personal digital assistant (PDA) and who is now developing a computer memory system modeled after the human brain.''",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Donna_Dubinsky"
  },
  {
    name:"Shafi Goldwasser",
    year:1993,
    dob:1958,
    dod:null,
    info:"is an American-Israeli computer scientist and winner of the Turing Award in 2012. She is a professor of electrical engineering and computer science at MIT, a professor of mathematical sciences at the Weizmann Institute of Science, Israel, co-founder and chief scientist of Duality Technologies and the director of the Simons Institute for the Theory of Computing in Berkeley, CA.",
    contribution:"a theoretical computer scientist, is a two-time recipient of the Gödel Prize for research on complexity theory, cryptography and computational number theory, and the invention of zero-knowledge proofs.",
    image:"https://upload.wikimedia.org/wikipedia/commons/8/84/Shafi_Goldwasser.JPG",
    wiki:"https://en.wikipedia.org/wiki/Shafi_Goldwasser"
  },
  {
    name:"Barbara Liskov",
    year:1993,
    dob:1939,
    dod:null,
    info:"is an American computer scientist[2] who is an Institute Professor at the Massachusetts Institute of Technology and Ford Professor of Engineering in its School of Engineering's electrical engineering and computer science department.[3] She was one of the first women to be granted a doctorate in computer science in the United States and is a Turing Award winner who developed the Liskov substitution principle.",
    contribution:"together with Jeannette Wing, developed the Liskov substitution principle. Liskov was also the winner of the Turing Prize in 2008.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Barbara_Liskov_MIT_computer_scientist_2010.jpg/1024px-Barbara_Liskov_MIT_computer_scientist_2010.jpg",
    wiki:"https://en.wikipedia.org/wiki/Barbara_Liskov"
  },
  {
    name:"Sally Floyd",
    year:1994,
    dob:1953,
    dod:null,
    info:"is an American computer scientist. Formerly associated with the International Computer Science Institute in Berkeley, California, she retired in 2009. She is best known for her work on Internet congestion control, and was in 2007 one of the top-ten most cited researchers in computer science.",
    contribution:"is known for her work on Transmission Control Protocol.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Sally_Floyd"
  },
  {
    name:"Xiaoyuan Tu",
    year:1996,
    dob:1967,
    dod:null,
    info:"",
    contribution:"was the first female recipient of ACM's Doctoral Dissertation Award.",
    image:"",
    wiki:""
  },
  {
    name:"Anita Borg",
    year:1997,
    dob:1949,
    dod:2003,
    info:"was an American computer scientist. She founded the Institute for Women and Technology and the Grace Hopper Celebration of Women in Computing.",
    contribution:"was the founding director of the Institute for Women and Technology (IWT), renamed Anita Borg Institute (ABI) in her honor in 2003.",
    image:"https://upload.wikimedia.org/wikipedia/en/e/e1/Anita_Borg.jpg",
    wiki:"https://en.wikipedia.org/wiki/Anita_Borg"
  },
  {
    name:"LinuxChix",
    year:1998,
    dob:null,
    dod:null,
    info:"is a women-oriented Linux community. It was formed to provide both technical and social support for women Linux users, although men are encouraged to contribute.[1] Members of the community are referred to as 'a Linux chick' (singular) and 'LinuxChix' or 'Linux Chix' (plural) regardless of gender.",
    contribution:"an international organization for women who use Linux and women and men who want to support women in computing was founded by Deb Richardson.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/LinuxChix"
  },
  {
    name:"Marissa Mayer",
    year:1999,
    dob:1975,
    dod:null,
    info:"is an American information technology executive, formerly serving as the president and chief executive officer of Yahoo!, a position she had held starting July 2012. It was announced in January 2017 that she would step down from the company's board upon the sale of Yahoo!'s operating business to Verizon Communications[8] for $4.8 billion.[9] She would not join the newly combined company, now called 'Oath,' and announced her resignation on June 13, 2017.[9][10] She is a graduate of Stanford University and was a long-time executive, usability leader, and key spokeswoman for Google (employee #20).",
    contribution:"was the first female engineer hired at Google, and was later named vice president of Search Product and User Experience. She was formerly the CEO of Yahoo!.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Marissa_Mayer%2C_World_Economic_Forum_2013_III.jpg/1024px-Marissa_Mayer%2C_World_Economic_Forum_2013_III.jpg",
    wiki:"https://en.wikipedia.org/wiki/Marissa_Mayer"
  },
  {
    name:"Ellen Spertus",
    year:2003,
    dob:null,
    dod:null,
    info:"is a Professor of Computer Science at Mills College, Oakland, California, United States, and a former senior research scientist at Google.",
    contribution:"earned a PhD in Electrical Engineering and Computer Science from MIT in 1998 with the notable thesis 'ParaSite: Mining the structural information on the World-Wide Web'.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Ellen_Spertus"
  },
  {
    name:"Jeri Ellsworth",
    year:2004,
    dob:1974,
    dod:null,
    info:"is an American entrepreneur and an autodidact computer chip designer and inventor. She gained fame in 2004 for creating a complete Commodore 64 system on a chip housed within a joystick, called C64 Direct-to-TV. That 'computer in a joystick' could run 30 video games from the early 1980's, and at peak, sold over 70,000 units in a single day via the QVC shopping channel. Ellsworth co-founded CastAR (formerly Technical Illusions) in 2013 and stayed with the company until it shut down on June 26, 2017. In late 2014, she moved from Seattle to Mountain View, California with the CastAR team.", contribution:"is a self-taught computer chip designer and creator of the C64 Direct-to-TV",
    image:"https://upload.wikimedia.org/wikipedia/commons/7/7f/You%27re_one_baaad_cat.jpg",
    wiki:"https://en.wikipedia.org/wiki/Jeri_Ellsworth"
  },
  {
    name:"Lucy Sanders",
    year:2004,
    dob:1954,
    dod:null,
    info:"is the current CEO and a co-founder of the National Center for Women & Information Technology.[1] She is the recipient of many distinguished honors in the STEM fields, including induction into the US News STEM Leadership Hall of Fame in 2013.",
    contribution:"co-founded the National Center for Women & Information Technology",
    image:"https://upload.wikimedia.org/wikipedia/commons/4/47/Lucy_Sanders.jpg",
    wiki:"https://en.wikipedia.org/wiki/Lucy_Sanders"
  },
  {
    name:"Audrey Tang",
    year:2005,
    dob:1981,
    dod:null,
    info:"is a Taiwanese free software programmer, who has been described as one of the 'ten greats of Taiwanese computing.'In August 2016, she was invited to join the Taiwan Executive Yuan as a minister without portfolio, making her the first transgender official in the top executive cabinet.",
    contribution:"was the initiator and leader of the Pugs project.",
    image:"https://upload.wikimedia.org/wikipedia/commons/e/e5/Audrey_Tang_in_2015_%28cropped%29.jpg",
    wiki:"https://en.wikipedia.org/wiki/Audrey_Tang"
  },
  {
    name:"Mary Lou Jepsen",
    year:2005,
    dob:1965,
    dod:null,
    info:"is a technical executive and inventor in the fields of display, imaging, and computer hardware. She is the founder of OpenWater,[3] a startup working on fMRI-type imaging of the body using holographic, infrared techniques.[4] In 2016, she joined the board of Lear Corporation, a Detroit-area maker of seats and electronics for cars. She was previously an executive at Facebook / Oculus VR.Among her objectives at Facebook was leading a concerted effort to bring Virtual Reality to the next level. Previously she was Head of the Display Division at Google X where she led more than one 'Moon Shot' program, reported to Sergey Brin, and advised and directed display and consumer electronic programs throughout Google. The Wall Street Journal reported that among her projects there she created Google Lego TV: displays composed of smaller screens that plug together like Legos to create vast, seamless images and 'live walls' for wall size interaction, television, video conferencing and gaming, to virtual reality without having to wear anything on your face or body. Jepsen previously founded Pixel Qi in Taipei, Taiwan, focused on innovative opto-electronic architectures and the manufacturer thereof. Pixel Qi aimed to deliver high performance, low-power, sunlight-readable screens for mobile devices. The long term vision of Pixel Qi was to create devices that never need be recharged through a two prong approach 1) lowering the power consumption of the device through innovative screen and power management technology and 2) using alternative power generation and battery technologies. She was the co-founder and first chief technology officer of One Laptop per Child (OLPC) a non-profit that generated more than $1B in revenue and helped create $30B in revenue for its for-profit partners. There she designed the $100 laptop with new screen architectures, new very low power management architecture, new battery technology, new mesh networking protocol, and new user interface, and shipped millions of them to children in the developing world. In 2008 she was named to the Time 100, and In 2013 she was named to CNN's top 10 thinkers in science and technology, for her work in rethinking functional brain imaging.She is also a member of the Xconomists, an ad hoc team of editorial advisors for the tech news and media company, Xconomy.",
    contribution:"was the founder and chief technology officer of One Laptop Per Child (OLPC), and the founder of Pixel Qi.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mary_Lou_Jepsen_in_Lab.jpg/1280px-Mary_Lou_Jepsen_in_Lab.jpg",
    wiki:"https://en.wikipedia.org/wiki/Mary_Lou_Jepsen"
  },
  {
    name:"Maria Klawel",
    year:2006,
    dob:1951,
    dod:null,
    info:"is a computer scientist and the fifth president of Harvey Mudd College (since July 1, 2006).Born in Toronto in 1951, she became a naturalized U.S. citizen in 2009. She was previously Dean of the School of Engineering and Applied Science at Princeton University.",
    contribution:"was the first woman to become president of the Harvey Mudd College since its founding in 1955 and was ACM president from 2002 until 2004.",
    image:"https://upload.wikimedia.org/wikipedia/commons/3/36/Maria_Klawe_2015.jpg",
    wiki:"https://en.wikipedia.org/wiki/Maria_Klawe"
  },
  {
    name:"Melanie Rieback",
    year:2006,
    dob:null,
    dod:null,
    info:"is a computer scientist, chiefly known for her work regarding the privacy and security of RFID (radio frequency identification) technology.",
    contribution:"research concerns the security and privacy of Radio Frequency Identification (RFID) technology, she is known to have programmed the first virus to infect RFID devices.",
    image:"https://upload.wikimedia.org/wikipedia/commons/e/ee/Melanie_Rieback_at_the_SingularityU_The_Netherlands_Summit_2016_%2829027699274%29_%28cropped%29.jpg",
    wiki:"https://en.wikipedia.org/wiki/Melanie_Rieback"
  },
  {
    name:"Joanna Rutkowska",
    year:2006,
    dob: null,
    dod: null,
    info:"is a Polish computer security researcher, primarily known for her research on low-level security and stealth malware - and as founder of the Qubes OS security-focused desktop operating system. She became known in the security community after the Black Hat Briefings conference in Las Vegas in August 2006, where Rutkowska presented an attack against Vista kernel protection mechanism, and also a technique dubbed Blue Pill, that used hardware virtualization to move a running OS into a virtual machine. Subsequently, she has been named one of Five Hackers who Put a Mark on 2006 by eWeek Magazine for her research on the topic. The original concept of Blue Pill was published by another researcher at IEEE Oakland on May 2006 under the name VMBR. During the following years, Rutkowska continued to focus on low-level security. In 2007 she demonstrated that certain types of hardware-based memory acquisition (e.g. FireWire based) are unreliable and can be defeated.Later in 2007, together with a team member Alexander Tereshkin, presented further research on virtualization malware.In 2008, Rutkowska with her team focused on Xen hypervisor security.In 2009, together with a team member Rafal Wojtczuk, presented an attack against Intel Trusted Execution Technology and Intel System Management Mode. In April 2007, Rutkowska founded Invisible Things Lab in Warsaw, Poland. The company focuses on OS and VMM security research and provides various consulting services. In 2010, she and Rafal Wojtczuk began working on the Qubes OS security-oriented desktop Xen distribution, which utilizes Fedora Linux. The initial release of Qubes 1.0 was completed by September 3, 2012 and is available as a free download.Its main concept is 'security by compartmentalization', using domains implemented as lightweight Xen virtual machines to isolate various subsystems. Each compartment is referred to as a Qube, which operates as a separate hardware level virtual machine. The project refers to itself as 'a reasonably secure operating system' and has received endorsements by numerous privacy and security experts.[citation needed] It is fairly unique in its capabilities, having a design informed by research on proven vulnerabilities in the trusted compute base (TCB), that are unaddressed in most common desktop operating systems. She has published seminal works on systems trustability, most recently Intel x86 Considered Harmful and State Considered Harmful - A Proposal for a Stateless Laptop.Rutkowska has been invited as an esteemed presenter at security conferences, such as Chaos Communication Congress, Black Hat Briefings, HITB, RSA Conference, RISK, EuSecWest & Gartner IT Security Summit.",
    contribution:"presented Blue Pill, a rootkit based on x86 virtualization, at the Black Hat Briefings computer security conference.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/LinuxCon_Europe_Joanna_Rutkowska_03.jpg/1024px-LinuxCon_Europe_Joanna_Rutkowska_03.jpg",
    wiki:"https://en.wikipedia.org/wiki/Joanna_Rutkowska"
  },
  {
    name:"Megan Smith",
    year:2014,
    dob:null,
    dod:null,
    info:"was the 3rd Chief Technology Officer of the United States (U.S. CTO) and Assistant to the President, serving under President Barack Obama. She was previously a vice president at Google, leading new business development at Google for nine years, was general manager of Google.org,a vice president at Google[x] and the former CEO of Planet Out.She serves on the boards of MIT and Vital Voices, was a member of the USAID Advisory Committee on Voluntary Aid and co-founded the Malala Fund.On September 4, 2014, she was named as the third (and first female) U.S. CTO, succeeding Todd Park, and serving until January, 2017.",
    contribution:"named third (and first female) Chief Technology Officer of the United States of America (USCTO), succeeding Todd Park.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Megan_Smith_official_portrait.jpg/1024px-Megan_Smith_official_portrait.jpg",
    wiki:"https://en.wikipedia.org/wiki/Megan_Smith"
  },
  {
    name:"Sarah Sharp",
    year:2015,
    dob:1985,
    dod:null,
    info:"is a software engineer who has worked extensively on the Linux kernel, including serving on the Linux Foundation's Technical Advisory Board for two years.Sharp began working on the kernel in 2006 as an undergraduate at Portland State University, and later through an Intel undergraduate research grant.Sharp's contributions to the kernel include writing and acting as a maintainer for its USB 3.0 driver.Sharp stepped down from direct work on the kernel on 5 October 2015, citing the abrasive communication style and 'abusive commentary [on submitted patches]'' of the maintainer community. Sharp is also a volunteer co-coordinator of the Outreachy project,and led a team contributing to the Linux kernel for the project's June 2013 internships. Sharp won the first annual Red Hat Women in Open Source Community Award in 2015 for 'efforts in improving communications and inviting women into open source communities' and the 2016 O'Reilly Open Source Award for accomplishments in the open source community. In 2017, Sharp changed their pronouns to they/them and their first name from Sarah to Sage.",
    contribution:"is the first winner of the annual Women in Open Source Community Award, awarded by RedHat.",
    image:"",
    wiki:"https://en.wikipedia.org/wiki/Sage_Sharp"
  }

])

//API complete
