// JavaScript source code

const cse = [
    [
        { "TECHNICAL ENGLISH- I": 3 },
        { "ENGINEERING MATHEMATICS-I": 4 },
        { "ENGINEERING PHYSICS": 3 },
        { "APPLIED CHEMISTRY": 3 },
        { "PROGRAMMING IN C": 3 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-I": 1 },
        { "C PROGRAMMING LABORATORY": 1 },
        { "ENGINEERING PRACTICES LABORATORY": 1 },
    ],
    [
        { "TECHNICAL ENGLISH- II": 3 },
        { "ENGINEERING MATHEMATICS-II": 4 },
        { "PHYSICS OF MATERIALS": 3 },
        { "ENVIRONMENTAL SCIENCE AND ENGINEERING": 3 },
        { "PROGRAMMING AND DATA STRUCTURES": 3 },
        { "ENGINEERING GRAPHICS": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-II": 1 },
        { "PROGRAMMING AND DATA STRUCTURES LABORATORY": 1 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY": 1 },
    ],
    [
        { "DISCRETE MATHEMATICS": 4 },
        { "DATA STRUCTURES": 3 },
        { "DIGITAL PRINCIPALS AND SYSTEM DESIGN": 3 },
        { "OBJECT ORIENTED PROGRAMMING": 3 },
        { "COMPUTER ORGANIZATION AND ARCHITECTURE": 3 },
        { "DATA STRUCTURES AND OOPS LABORATORY": 2 },
        { "DIGITAL LABORATORY": 1 },
        { "COMMUNICATION LABORATORY": 1 },
        { "SOFT SKILLS AND APTITUDE": 1 },
    ],
    [
        { "PROBABILITY AND QUEUING THEORY": 4 },
        { "DATABASE MANAGEMENT SYSTEMS": 3 },
        { "OPERATING SYSTEMS": 3 },
        { "DESIGN AND ANALYSIS OF ALGORITHMS": 4 },
        { "WEB PROGRAMMING PRACTICAL": 2 },
        { "OPERATING SYSTEMS LABORATORY ": 2 },
        { "DATABASE MANAGEMENT SYSTEMS LABORATORY": 2 },
        { "SOFT SKILLS AND APTITUDE � II": 1 },
    ],
    [
        { "SOFTWARE ENGINEERING": 3 },
        { "COMPUTER NETWORKS": 3 },
        { "EMBEDDED SYSTEMS DESIGN": 3 },
        { "THEORY OF COMPUTATION": 3 },
        { "ELECTIVE - MULTIMEDIA SYSTEM": 3 },
        { "ELECTIVE - DATA WAREHOUSING AND DATA MINING ": 3 },
        { "ELECTIVE - C# AND DOTNET PROGRAMMING": 3 },
        { "COMPUTER NETWORKS LABORATORY": 2 },
        { "PYTHON PROGRAMMING LABORATORY": 2 },
        { "PROFESSIONAL COMMUNICATION SKILLS LABORATORY": 1 },
        { "SOFT SKILLS AND APTITUDE � III": 1 },
    ]
]

const mech = [
    [
        { "TECHNICAL ENGLISH- I": 3 },
        { "ENGINEERING MATHEMATICS-I": 4 },
        { "ENGINEERING PHYSICS": 3 },
        { "APPLIED CHEMISTRY": 3 },
        { "PROGRAMMING IN C": 3 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-I": 1 },
        { "C PROGRAMMING LABORATORY": 1 },
        { "ENGINEERING PRACTICES LABORATORY": 1 },
    ],
    [
        { "TECHNICAL ENGLISH- II": 3 },
        { "ENGINEERING MATHEMATICS-II": 4 },
        { "PHYSICS OF MATERIALS": 3 },
        { "ENVIRONMENTAL SCIENCE AND ENGINEERING": 3 },
        { "PROGRAMMING AND DATA STRUCTURES": 3 },
        { "ENGINEERING GRAPHICS": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-II": 1 },
        { "PROGRAMMING AND DATA STRUCTURES LABORATORY": 1 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY": 1 },
    ],
    [
        { "TRANSFORMS AND BOUNDARY VALUE PROBLEMS": 4 },
        { "ENGINEERING THERMODYNAMICS": 3 },
        { "STRENGTH OF MATERIALS ": 3 },
        { "FLUID MECHANICS": 3 },
        { "MANUFACTURING TECHNOLOGY-II": 3 },
        { "ENVIRONMENTAL SCIENCE AND ENGINEERING": 3 },
        { "STRENGTH OF MATERIALS LABORATORY ": 1 },
        { "FLUID MECHANICS LABORATORY ": 1 },
        { "MANUFACTURING TECHNOLOGY LABORATORY-II": 2 },
        { "SOFT SKILLS AND APTITUDE-I": 1 },
    ],
    [
        { "STATISTICS AND NUMERICAL METHODS": 4 },
        { "KINEMATICS OF MACHINERY": 3 },
        { "THERMAL ENGINEERING": 3 },
        { "ELECTRICAL DRIVES AND MICROPROCESSOR ": 3 },
        { "APPLIED HYDRAULICS AND PNEUMATICS SYSTEMS": 3 },
        { "ENGINEERING MATERIALS AND METALLURGY  ": 3 },
        { "THERMAL ENGINEERING LABORATORY": 2 },
        { "ELECTRICAL DRIVES AND MICROPROCESSOR LABORATORY": 2 },
        { "COMMUNICATIONS SKILLS LABORATORY": 1 },
        { "SOFT SKILLS AND APTITUDE � II": 1 },
    ],
    [
        { "HEAT AND MASS TRANSFER": 3 },
        { "DYNAMICS OF MACHINERY": 3 },
        { "DESIGN OF MACHINE ELEMENTS": 3 },
        { "COMPUTER AIDED DESIGN AND MANUFACTURING": 3 },
        { "AUTOMOBILE ENGINEERING": 3 },
        { "ELECTIVE - PYTHON- PROGRAMMING AND PROBLEM SOLVING ": 3 },
        { "ELECTIVE - INTERNET OF THINGS": 3 },
        { "ELECTIVE - HEATING, VENTIALTION AND AIR CONDITIONING": 3 },
        { "HEAT POWER LABORATORY": 2 },
        { "DYNAMICS LABORATORY": 2 },
        { "CAD AND CAM LABORATORY": 2 },
        { "SOFT SKILLS AND APTITUDE � III": 1 },
    ]
]

const civil = [
    [
        { "TECHNICAL ENGLISH- I": 3 },
        { "ENGINEERING MATHEMATICS-I": 4 },
        { "ENGINEERING PHYSICS": 3 },
        { "APPLIED CHEMISTRY": 3 },
        { "PROGRAMMING IN C": 3 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-I": 1 },
        { "C PROGRAMMING LABORATORY": 1 },
        { "ENGINEERING PRACTICES LABORATORY": 1 },
    ],
    [
        { "TECHNICAL ENGLISH- II": 3 },
        { "ENGINEERING MATHEMATICS-II": 4 },
        { "PHYSICS OF MATERIALS": 3 },
        { "ENVIRONMENTAL SCIENCE AND ENGINEERING": 3 },
        { "PROGRAMMING AND DATA STRUCTURES": 3 },
        { "ENGINEERING GRAPHICS": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-II": 1 },
        { "PROGRAMMING AND DATA STRUCTURES LABORATORY": 1 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY": 1 },
    ],
    [
        { "TRANSFORMS AND PARTIAL DIFFERENTIAL EQUATIONS": 4 },
        { "CONSTRUCTION MATERIALS AND PRACTICES": 3 },
        { "MECHANICS OF SOLIDS ": 4 },
        { "SURVEYING": 3 },
        { "FLUID MECHANICS": 3 },
        { "COMPUTER AIDED BUILDING DRAWING LABORATORY": 2 },
        { "SURVEY LABORATORY  ": 2 },
        { "COMMUNICATION SKILLS LABORATORY ": 1 },
        { "SOFT SKILLS AND APTITUDE-I": 1 },
    ],
    [
        { "NUMERICAL METHODS FOR ENGINEERING COMPUTATION": 4 },
        { "ENVIRONMENTAL SCIENCES ": 3 },
        { "STRENGTH OF MATERIALS": 4 },
        { "TRANSPORTATION ENGINEERING ": 3 },
        { "APPLIED HYDRAULICS AND FLUID MACHINERY": 3 },
        { "CONCRETE TECHNOLOGY   ": 3 },
        { "HYDRAULIC ENGINEERING LABORATORY": 2 },
        { "MATERIAL TESTING LABORATORY": 2 },
        { "SOFT SKILLS AND APTITUDE � II": 1 },
    ],
    [
        { "PROFESSIONAL ETHICS AND HUMAN VALUES": 3 },
        { "STRUCTURAL ANALYSIS": 4 },
        { "ENVIRONMENTAL ENGINEERING": 3 },
        { "DESIGN OF REINFORCED CONCRETE ELEMENTS": 4 },
        { "SOIL MECHANICS": 3 },
        { "ELECTIVE - ARCHITECTURE AND TOWN PLANNING ": 3 },
        { "ELECTIVE - CONSTRUCTION PRACTICES AND EQUIPMENTS": 3 },
        { "ELECTIVE - REMOTE SENSING AND GIS": 3 },
        { "SOIL MECHANICS LABORATORY": 2 },
        { "CONCRETE AND HIGHWAY LABORATORY": 2 },
        { "TECHNICAL SEMINAR": 1 },
        { "SOFT SKILLS AND APTITUDE � III": 1 },
    ]
]

const eee = [
    [
        { "TECHNICAL ENGLISH- I": 3 },
        { "ENGINEERING MATHEMATICS-I": 4 },
        { "ENGINEERING PHYSICS": 3 },
        { "APPLIED CHEMISTRY": 3 },
        { "PROGRAMMING IN C": 3 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-I": 1 },
        { "C PROGRAMMING LABORATORY": 1 },
        { "ENGINEERING PRACTICES LABORATORY": 1 },
    ],
    [
        { "TECHNICAL ENGLISH- II": 3 },
        { "ENGINEERING MATHEMATICS-II": 4 },
        { "PHYSICS OF MATERIALS": 3 },
        { "ENVIRONMENTAL SCIENCE AND ENGINEERING": 3 },
        { "PROGRAMMING AND DATA STRUCTURES": 3 },
        { "ENGINEERING GRAPHICS": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-II": 1 },
        { "PROGRAMMING AND DATA STRUCTURES LABORATORY": 1 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY": 1 },
    ],
    [
        { "TRANSFORMS AND PARTIAL DIFFERENTIAL EQUATIONS": 4 },
        { "ELECTRONIC DEVICES AND CIRCUITS": 3 },
        { "ELECTROMAGNETIC THEORY ": 3 },
        { "ELECTRICAL MACHINES � I ": 3 },
        { "NETWORK ANALYSIS AND SYNTHESIS": 3 },
        { "ENVIRONMENTAL SCIENCE AND ENGINEERING": 3 },
        { "ELECTRONIC DEVICES AND CIRCUITS LABORATORY": 2 },
        { "ELECTRICAL MACHINES LABORATORY �I": 2 },
        { "SOFT SKILLS AND APTITUDE-I": 1 },
    ],
    [
        { "SIGNALS AND SYSTEMS": 3 },
        { "ELECTRICAL MACHINES � II ": 3 },
        { "GENERATION, TRANSMISSION AND DISTRIBUTION SYSTEMS": 4 },
        { "MEASUREMENTS AND INSTRUMENTATION": 3 },
        { "CONTROL SYSTEMS": 3 },
        { "DIGITAL LOGIC CIRCUITS PRACTICAL": 3 },
        { "CONTROL AND INSTRUMENTATION LABORATORY": 2 },
        { "ELECTRICAL MACHINES LABORATORY � II": 2 },
        { "SOFT SKILLS AND APTITUDE � II": 1 },
    ],
    [
        { "TOTAL QUALITY MANAGEMENT IN ELECTRICAL INDUSTRY": 3 },
        { "LINEAR INTEGRATED CIRCUITS": 4 },
        { "MICROPROCESSORS AND MICROCONTROLLERS": 3 },
        { "POWER ELECTRONICS": 4 },
        { "ELECTRICAL MACHINE DESIGN": 3 },
        { "ELECTIVE - NON-CONVENTIONAL ENERGY SOURCES ": 3 },
        { "ELECTIVE - CONSTRUCTION PRACTICES AND EQUIPMENTS": 3 },
        { "LINEAR AND DIGITAL IC LABORATORY": 2 },
        { "MICROPROCESSORS AND MICROCONTROLLERS LABORATORY": 2 },
        { "POWER ELECTRONICS DESIGN LABORATORY": 2 },
        { "SOFT SKILLS AND APTITUDE � III": 1 },
    ]
]

const ece = [
    [
        { "TECHNICAL ENGLISH- I": 3 },
        { "ENGINEERING MATHEMATICS-I": 4 },
        { "ENGINEERING PHYSICS": 3 },
        { "APPLIED CHEMISTRY": 3 },
        { "PROGRAMMING IN C": 3 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-I": 1 },
        { "C PROGRAMMING LABORATORY": 1 },
        { "ENGINEERING PRACTICES LABORATORY": 1 },
    ],
    [
        { "TECHNICAL ENGLISH- II": 3 },
        { "ENGINEERING MATHEMATICS-II": 4 },
        { "PHYSICS OF MATERIALS": 3 },
        { "ENVIRONMENTAL SCIENCE AND ENGINEERING": 3 },
        { "PROGRAMMING AND DATA STRUCTURES": 3 },
        { "ENGINEERING GRAPHICS": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-II": 1 },
        { "PROGRAMMING AND DATA STRUCTURES LABORATORY": 1 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY": 1 },
    ],
    [
        { "TRANSFORMS AND LINEAR ALGEBRA": 4 },
        { "ELECTRONIC DEVICES": 3 },
        { "NETWORK ANALYSIS AND SYNTHESIS": 3 },
        { "DIGITAL SYSTEM DESIGN": 3 },
        { "SIGNALS AND SYSTEMS": 4 },
        { "ELECTRONIC DEVICES LABORATORY": 1 },
        { "DIGITAL LABORATORY": 1 },
        { "ENGLISH LABORATORY": 2 },
        { "SOFT SKILLS AND APTITUDE-I": 1 },
    ],
    [
        { "PROBABILITY AND STOCHASTIC PROCESSES": 4 },
        { "ENGINEERING ELECTROMAGNETICS": 4 },
        { "ELECTRONIC CIRCUITS": 3 },
        { "LINEAR INTEGRATED CIRCUITS": 3 },
        { "DIGITAL SIGNAL PROCESSING": 4 },
        { "ANALOG COMMUNICATION SYSTEM": 3 },
        { "LINEAR INTEGRATED CIRCUITS LABORATORY": 1 },
        { "ELECTRONIC CIRCUITS AND SIMULATION LABORATORY": 1 },
        { "DIGITAL SIGNAL PROCESSING": 1 },
        { "SOFT SKILLS AND APTITUDE � II": 1 },
    ],
    [
        { "DIGITAL COMMUNICATION": 3 },
        { "TRANSMISSION LINES AND WAVEGUIDES": 3 },
        { "MICROPROCESSORS AND MICROCONTROLLERS": 3 },
        { "VLSI DESIGN": 3 },
        { "ELECTIVE - DATA STRUCTURES AND OBJECT ORIENTED PROGRAMMING": 3 },
        { "ELECTIVE - PROGRAMMING IN C++": 3 },
        { "ELECTIVE - CONTROL SYSTEMS": 3 },
        { "COMMUNICATION LABORATORY": 1 },
        { "MICROPROCESSORS AND MICROCONTROLLERS LABORATORY": 1 },
        { "VLSI LABORATORY": 1 },
        { "SOFT SKILLS AND APTITUDE � III": 1 },
    ]
]

const it = [
    [
        { "TECHNICAL ENGLISH- I": 3 },
        { "ENGINEERING MATHEMATICS-I": 4 },
        { "ENGINEERING PHYSICS": 3 },
        { "APPLIED CHEMISTRY": 3 },
        { "PROGRAMMING IN C": 3 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-I": 1 },
        { "C PROGRAMMING LABORATORY": 1 },
        { "ENGINEERING PRACTICES LABORATORY": 1 },
    ],
    [
        { "TECHNICAL ENGLISH- II": 3 },
        { "ENGINEERING MATHEMATICS-II": 4 },
        { "PHYSICS OF MATERIALS": 3 },
        { "ENVIRONMENTAL SCIENCE AND ENGINEERING": 3 },
        { "PROGRAMMING AND DATA STRUCTURES": 3 },
        { "ENGINEERING GRAPHICS": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-II": 1 },
        { "PROGRAMMING AND DATA STRUCTURES LABORATORY": 1 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY": 1 },
    ],
    [
        { "DISCRETE MATHEMATICS": 4 },
        { "ADVANCED DATA STRUCTURES": 3 },
        { "DIGITAL LOGIC DESIGN": 3 },
        { "PRINCIPLES OF COMMUNICATION": 3 },
        { "OBJECT ORIENTED PROGRAMMING IN C++": 3 },
        { "COMPUTER ARCHITECTURE": 3 },
        { "DATA STRUCTURES USING C++ LABORATORY": 2 },
        { "DIGITAL LOGIC DESIGN LABORATORY": 1 },
        { "COMMUNICATION SKILLS LABORATORY": 1 },
        { "SOFT SKILLS AND APTITUDE-I": 1 },
    ],
    [
        { "PROBABILITY AND STATISTICS": 4 },
        { "OPERATING SYSTEMS": 3 },
        { "MICROPROCESSOR AND MICROCONTROLLERS": 3 },
        { "DESIGN AND ANALYSIS OF ALGORITHMS": 3 },
        { "SOFTWARE ENGINEERING": 3 },
        { "JAVA PROGRAMMING ": 3 },
        { "MICROPROCESSOR AND MICROCONTROLLERS LABORATORY": 1 },
        { "JAVA PROGRAMMING LABORATORY": 1 },
        { "SOFT SKILLS AND APTITUDE � II": 1 },
    ],
    [
        { "COMPUTER NETWORKS": 3 },
        { "DATABASE MANAGEMENT SYSTEMS": 3 },
        { "THEORY OF COMPUTATION": 4 },
        { "WEB TECHNOLOGY": 3 },
        { "ELECTIVE - COMPUTER GRAPHICS": 3 },
        { "ELECTIVE - C# .NET": 3 },
        { "COMPUTER NETWORKS LABORATORY": 1 },
        { "DATABASE MANAGEMENT SYSTEMS LABORATORY": 2 },
        { "WEB TECHNOLOGY LABORATORY": 2 },
        { "MINI PROJECT - I": 1 },
        { "SOFT SKILLS AND APTITUDE � III": 1 },
    ]
]

const ft = [
    [
        { "TECHNICAL ENGLISH- I": 3 },
        { "ENGINEERING MATHEMATICS-I": 4 },
        { "ENGINEERING PHYSICS": 3 },
        { "APPLIED CHEMISTRY": 3 },
        { "PROGRAMMING IN C": 3 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-I": 1 },
        { "C PROGRAMMING LABORATORY": 1 },
        { "ENGINEERING PRACTICES LABORATORY": 1 },
    ],
    [
        { "TECHNICAL ENGLISH- II": 3 },
        { "ENGINEERING MATHEMATICS-II": 4 },
        { "PHYSICS OF MATERIALS": 3 },
        { "ENVIRONMENTAL SCIENCE AND ENGINEERING": 3 },
        { "PROGRAMMING AND DATA STRUCTURES": 3 },
        { "ENGINEERING GRAPHICS": 3 },
        { "PHYSICS AND CHEMISTRY LABORATORY-II": 1 },
        { "PROGRAMMING AND DATA STRUCTURES LABORATORY": 1 },
        { "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY": 1 },
    ],
    [
        { "PROBABILITY AND STATISTICAL QUALITY CONTROL": 4 },
        { "BASICS OF MECHANICAL AND ELECTRICAL ENGINEERING": 3 },
        { "ENVIRONMENTAL SCIENCE AND ENGINEERING": 3 },
        { "TECHNOLOGY OF YARN MANUFACTURE": 3 },
        { "FASHION ART AND DESIGN": 3 },
        { "PATTERN MAKING AND GRADING LABORATORY": 2 },
        { "FASHION ILLUSTRATION LABORATORY": 1 },
        { "SOFT SKILLS AND APTITUDE-I": 1 },
    ],
    [
        { "HISTORY OF COSTUMES AND ACCESSORIES DESIGNING": 4 },
        { "WOVEN FABRIC MANUFACTURE AND STRUCTURE": 3 },
        { "KNITTED FABRIC MANUFACTURE AND STRUCTURE": 3 },
        { "CHEMICAL PROCESSING OF TEXTILES AND GARMENTS": 4 },
        { "GARMENT CONSTRUCTION-I": 3 },
        { "FABRIC STRUCTURE AND TEXTILE CAD LABORATORY": 1 },
        { "GARMENT CONSTRUCTION LABORATORY - I": 2 },
        { "COMMUNICATION SKILLS LABORATORY": 1 },
        { "IN-PLANT TRAINING": 1 },
        { "SOFT SKILLS AND APTITUDE � II": 1 },
    ],
    [
        { "GARMENT CONSTRUCTION-II": 3 },
        { "GARMENT PRODUCTION MACHINERY AND EQUIPMENT": 3 },
        { "APPAREL PRODUCTION PLANNING AND CONTROL": 3 },
        { "CLOTHING SIZE, FIT AND COMFORT": 3 },
        { "ELECTIVE - SURFACE ORNAMENTATION OF FABRICS": 3 },
        { "ELECTIVE - VISUAL MERCHANDISING": 3 },
        { "GARMENT CONSTRUCTION LABORATORY": 2 },
        { "APPAREL MACHINERY LABORATORY": 1 },
        { "IN-PLANT TRAINING": 2 },
        { "SOFT SKILLS AND APTITUDE � III": 1 },
    ]
] 

const departments = {
    "CSE": cse,
    "MECH": mech,
    "CIVIL": civil,
    "EEE": eee,
    "ECE": ece,
    "IT": it,
    "FT": ft
}

exports.getSubjects = function (department, semester) {
    
    const obj =departments[department][semester]; 
    // console.log(obj);
    return (obj);
    
}

// getSubject("CSE", 2);
