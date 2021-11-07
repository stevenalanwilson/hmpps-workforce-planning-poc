const stage = require('./dataStages')

module.exports = [
    {
        role: 'Developer',
        level: 'Senior',
        type: 0, /* 0 = New, 1 = Current */
        status: 0, /* 0 = OK, 1 = Due, 2 = Urgent */
        stage: {
            title: stage.new[1],
            url: 'new-stage'
        },
        roleCode: 'PRI 221',
        department: 'Prisons',
        serviceArea: 'Enablers',
        team: 'Money to prisoners',
    },
    {
        role: 'Developer',
        level: 'Senior',
        type: 1, /* 0 = New 1 = Current */
        status: 1, /* 0 = OK, 1 = Due, 2 = Urgent */
        stage: {
            title: stage.current[2],
            url: 'current-stage'
        },
        roleCode: 'PRI 052',
        department: 'Prisons',
        serviceArea: 'Enablers',
        team: 'Money to prisoners',
    },
    {
        role: 'Developer',
        level: 'Midlevel',
        type: 1, /* 0 = New 1 = Current */
        status: 2, /* 0 = OK, 1 = Due, 2 = Urgent */
        stage: {
            title: stage.current[0],
            url: 'current-stage'
        },
        roleCode: 'PRI 102',
        department: 'Prisons',
        serviceArea: 'Enablers',
        team: 'Money to prisoners',
    },
    {
        role: 'Product Manager',
        level: 'Senior',
        type: 0, /* 0 = New, 1 = Current */
        status: 0, /* 0 = OK, 1 = Due, 2 = Urgent */
        stage: {
            title: stage.new[1],
            url: 'new-stage'
        },
        roleCode: 'PRI 021',
        department: 'Prisons',
        serviceArea: 'Enablers',
        team: 'DPS Tech',
    },
    {
        role: 'Delivery Manager',
        level: 'Midlevel',
        type: 0, /* 0 = New 1 = Current */
        status: 0, /* 0 = OK, 1 = Due, 2 = Urgent */
        stage: {
            title: stage.new[2],
            url: 'new-stage'
        },
        roleCode: 'PRI 031',
        department: 'Prisons',
        serviceArea: 'Enablers',
        team: 'DPS Tech',
    },
    {
        role: 'Developer',
        level: 'Junior',
        type: 0, /* 0 = New 1 = Current */
        status: 0, /* 0 = OK, 1 = Due, 2 = Urgent */
        stage: {
            title: stage.current[2],
            url: 'current-stage'
        },
        roleCode: 'PRI 0132',
        department: 'Prisons',
        serviceArea: 'Enablers',
        team: 'Money to prisoners',
    },
    {
        role: 'Developer',
        level: 'Midlevel',
        type: 1, /* 0 = New 1 = Current */
        status: 1, /* 0 = OK, 1 = Due, 2 = Urgent */
        stage: {
            title: stage.current[1],
            url: 'current-stage'
        },
        roleCode: 'PRI 0134',
        department: 'Prisons',
        serviceArea: 'Enablers',
        team: 'Money to prisoners',
    },
]