const stage = {
    new: {
        0: 'Not started',
        1: 'Business case started',
        2: 'Business case submitted',
        3: 'Business case approved',
        4: 'Recruiting',
        5: 'Offer made to candidate',
        6: 'Offer rejected',
        7: 'Offer accepted',
        8: 'Candidate onboarding',
        9: 'Start date confirmed'
    },
    current: {
        0: 'Renewal not started',
        1: 'Renewal started',
        2: 'Renewal Submitted',
        3: 'Renewal Approved'
    }
}

module.exports = [
    {
        role: 'Developer',
        level: 'Senior',
        type: 0, /* 0 = New, 1 = Current */
        status: 0, /* 0 = OK, 1 = Due, 2 = Urgent */
        stage: stage.new[1],
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
        stage: stage.current[2],
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
        stage: stage.current[0],
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
        stage: stage.new[1],
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
        stage: stage.new[2],
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
        stage: stage.current[2],
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
        stage: stage.current[1],
        roleCode: 'PRI 0134',
        department: 'Prisons',
        serviceArea: 'Enablers',
        team: 'Money to prisoners',
    },
]