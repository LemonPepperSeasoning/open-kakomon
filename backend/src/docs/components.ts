export default {
    components:{
        schemas:{
            School:{
                type:'object',
                properties:{
                    id:{
                        type:'string',
                        description:"School identification number",
                        example:"u0001"
                    },
                    name:{
                        type: 'string',
                        description: 'Name of school. (Typically university or high school)',
                        example: "University of Tokyo"
                    },
                    Address:{
                        type: 'string',
                        description: 'Address of school. (can be remote)',
                        example: "Tokyo Japan"
                    }
                }
            },
            Exam:{
                type:'object',
                properties:{
                    id:{
                        type:'string',
                        description:"Exam identification number",
                        example:"u0001"
                    },
                    schoolId:{
                        type:'string',
                        description:"School identification number",
                        example:"u0001"
                    },
                    year:{
                        type: 'string',
                        description: 'Year of the exam',
                        example: "2022"
                    },
                    major:{
                        type: 'string',
                        description: 'major/category of exam',
                        example: "2022"
                    },
                }
            },
        }
    }
}
