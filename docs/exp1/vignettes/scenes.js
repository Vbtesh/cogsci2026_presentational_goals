var scenes = {
    'seq_AAO_R-A_P-absent': {
        'description': 'Red and Green wait in line. Red goes first and takes one of the two Apples. Purple is absent.',
    },
    'seq_AAO_R-A_P-present': {
        'description': 'Red and Green wait in line. Red goes first and takes one of the two Apples. Purple sees them choose.',
    },
    'seq_AAO_R-O_P-absent': {
        'description': 'Red and Green wait in line. Red goes first and takes the Orange. Purple is absent.',
    },
    'seq_AAO_R-O_P-present': {
        'description': 'Red and Green wait in line. Red goes first and takes the Orange. Purple sees them choose.',
    },
    'seq_AO_R-A_P-present': {
        'description': 'Red and Green wait in line. Red goes first and takes the Apple. Purple sees them choose.',
    },
    'seq_AO_R-A_P-absent': {
        'description': 'Red and Green wait in line. Red goes first and takes the Apple. Purple is absent.',
    },
    'seq_AO_R-O_P-present': {
        'description': 'Red and Green wait in line. Red goes first and takes the Orange. Purple sees them choose.',
    },
    'seq_AO_R-O_P-absent': {
        'description': 'Red and Green wait in line. Red goes first and takes the Orange. Purple is absent.',
    },
    'sim_R-A_G-A_P-absent': {
        'description': 'Red and Green both prefer Apples. Red now knows that Green prefers Apples. Purple is absent and does not know which fruit they prefer.',
    },
    'sim_R-A_G-A_P-present': {
        'description': 'Red and Green both prefer Apples. Red now knows that Green prefers Apples. Purple sees them choose and now knows that they both prefer Apples.',
    },
    'sim_R-O_G-A_P-absent': {
        'description': 'Red prefers Oranges while Green prefers Apples. Red now knows that Green prefers Apples. Purple is absent and does not know which fruit they prefer.',
    },
    'sim_R-O_G-A_P-present': {
        'description': 'Red prefers Oranges while Green prefers Apples. Red now knows that Green prefers Apples. Purple sees them choose and now knows that Red prefers Oranges while Green prefers Apples.',
    },
};

var scenes = {
    'seq_AAO_R-A_P-absent': {
        'description': '<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> wait in line. <span style="color:red; font-weight:bold">Red</span> goes first and takes one of the two Apples. <span style="color:purple; font-weight:bold">Purple</span> is absent.',
    },
    'seq_AAO_R-A_P-present': {
        'description': '<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> wait in line. <span style="color:red; font-weight:bold">Red</span> goes first and takes one of the two Apples. <span style="color:purple; font-weight:bold">Purple</span> sees them choose.',
    },
    'seq_AAO_R-O_P-absent': {
        'description': '<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> wait in line. <span style="color:red; font-weight:bold">Red</span> goes first and takes the Orange. <span style="color:purple; font-weight:bold">Purple</span> is absent.',
    },
    'seq_AAO_R-O_P-present': {
        'description': '<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> wait in line. <span style="color:red; font-weight:bold">Red</span> goes first and takes the Orange. <span style="color:purple; font-weight:bold">Purple</span> sees them choose.',
    },
    'seq_AO_R-A_P-present': {
        'description': '<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> wait in line. <span style="color:red; font-weight:bold">Red</span> goes first and takes the Apple. <span style="color:purple; font-weight:bold">Purple</span> sees them choose.',
    },
    'seq_AO_R-A_P-absent': {
        'description': '<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> wait in line. <span style="color:red; font-weight:bold">Red</span> goes first and takes the Apple. <span style="color:purple; font-weight:bold">Purple</span> is absent.',
    },
    'seq_AO_R-O_P-present': {
        'description': '<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> wait in line. <span style="color:red; font-weight:bold">Red</span> goes first and takes the Orange. <span style="color:purple; font-weight:bold">Purple</span> sees them choose.',
    },
    'seq_AO_R-O_P-absent': {
        'description': '<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> wait in line. <span style="color:red; font-weight:bold">Red</span> goes first and takes the Orange. <span style="color:purple; font-weight:bold">Purple</span> is absent.',
    },
    'sim_R-A_G-A_P-absent': {
        'description': `<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> both prefer Apples. 
     <br>
        <span style="color:purple; font-weight:bold">Purple</span> is absent and does not know which fruit they prefer.`,
    },
    'sim_R-A_G-A_P-present': {
        'description': `<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> both prefer Apples.
        <br>
        <span style="color:purple; font-weight:bold">Purple</span> is absent and does not know which fruit they prefer.,
        <br> 
        <span style="color:red; font-weight:bold">Red</span> now knows what <span style="color:green; font-weight:bold">Green</span> prefers.`
    },
    'sim_R-A_G-A_P-present': {
        'description': `<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> both prefer Apples.
        <br>
        <span style="color:purple; font-weight:bold">Purple</span> sees them choose and now knows what they each prefer.
        <br>
        <span style="color:red; font-weight:bold">Red</span> now also knows what <span style="color:green; font-weight:bold">Green</span> prefers.`,
    },
    'sim_R-O_G-A_P-absent': {
        'description': `<span style="color:red; font-weight:bold">Red</span> prefers Oranges while <span style="color:green; font-weight:bold">Green</span> prefers Apples. 
        <br>
        <span style="color:purple; font-weight:bold">Purple</span> is absent and does not know which fruit they prefer.
        <br>
        <span style="color:red; font-weight:bold">Red</span> now knows what <span style="color:green; font-weight:bold">Green</span> prefers.`,
    },
    'sim_R-O_G-A_P-present': {
        'description': `<span style="color:red; font-weight:bold">Red</span> prefers Oranges while <span style="color:green; font-weight:bold">Green</span> prefers Apples. 
        <br>
        <span style="color:purple; font-weight:bold">Purple</span> sees them choose and now knows what they each prefer.
        <br>
        <span style="color:red; font-weight:bold">Red</span> now also knows what <span style="color:green; font-weight:bold">Green</span> prefers.`,
    },
    'sim_R-A_G-A_div_P-present': {
        'description': `<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> both prefer Apples.
        <br>
        <span style="color:purple; font-weight:bold">Purple</span> is absent and does not know which fruit they prefer.,
        <br> 
        <span style="color:red; font-weight:bold">Red</span> does not know <span style="color:green; font-weight:bold">Green</span> prefers.`
    },
    'sim_R-A_G-A_div_P-present': {
        'description': `<span style="color:red; font-weight:bold">Red</span> and <span style="color:green; font-weight:bold">Green</span> both prefer Apples.
        <br>
        <span style="color:purple; font-weight:bold">Purple</span> sees them choose and now knows what they each prefer.
        <br>
        <span style="color:red; font-weight:bold">Red</span> does not know <span style="color:green; font-weight:bold">Green</span> prefers.`,
    },
    'sim_R-O_G-A_div_P-absent': {
        'description': `<span style="color:red; font-weight:bold">Red</span> prefers Oranges while <span style="color:green; font-weight:bold">Green</span> prefers Apples. 
        <br>
        <span style="color:purple; font-weight:bold">Purple</span> is absent and does not know which fruit they prefer.
        <br>
        <span style="color:red; font-weight:bold">Red</span> does not know what <span style="color:green; font-weight:bold">Green</span> prefers.`,
    },
    'sim_R-O_G-A_div_P-present': {
        'description': `<span style="color:red; font-weight:bold">Red</span> prefers Oranges while <span style="color:green; font-weight:bold">Green</span> prefers Apples. 
        <br>
        <span style="color:purple; font-weight:bold">Purple</span> sees them choose and now knows what they each prefer.
        <br>
        <span style="color:red; font-weight:bold">Red</span> does not know what <span style="color:green; font-weight:bold">Green</span> prefers.`,
    },
};

var trialsCases = [
    // Base case 2 items competitive tastes
    {   
        'id': 'competitive-C_knows_B:Yes-C_knows_care:No-n_fruits(1;1)-Apple;Apple',
        'description': 'Red prefers A (same as Green). Red takes A when Purple is both absent and present.',
        'timeline': [
            'sim_R-A_G-A_P-present',
            'seq_AO_R-A_P-absent',
            'seq_AO_R-A_P-present',
        ],
        'comprehension': {
            'use': true,
            'Q0': 'Apple', // What does Red prefer?
            'Q1': 'Apple', // What does Green prefer?
            'Q2': 'Apple', // What does Red pick?
            'Q3': 'Yes', // Does Red know what Green prefers?
            'Q4': 'Yes', // Does Purple know what Red prefers?
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'competitive-C_knows_B:Yes-C_knows_care:No-n_fruits(1;1)-Orange;Orange',
        'description': 'Red prefers A (same as Green). Red takes O both when Purple is present or absent.',
        'timeline': [
            'sim_R-A_G-A_P-present',
            'seq_AO_R-O_P-absent',
            'seq_AO_R-O_P-present',
        ],
        'comprehension': {
            'use': false,
            'Q0': 'Apple', // What does Red prefer?
            'Q1': 'Apple', // What does Green prefer?
            'Q2': 'Orange', // What does Red pick?
            'Q3': 'Yes', // Does Red know what Green prefers?
            'Q4': 'Yes', // Does Purple know what Red prefers?
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'competitive-C_knows_B:Yes-C_knows_care:No-n_fruits(1;1)-Apple;Orange',
        'description': 'Red prefers A (same as Green). Red takes A when Purple is absent and O when Purple is present.',
        'timeline': [
            'sim_R-A_G-A_P-present',
            'seq_AO_R-A_P-absent',
            'seq_AO_R-O_P-present',
        ],
        'comprehension': {
            'use': false,
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'competitive-C_knows_B:Yes-C_knows_care:No-n_fruits(1;1)-Orange;Apple',
        'description': 'Red prefers A (same as Green). Red takes O when Purple is absent and A when Purple is present.',
        'timeline': [
            'sim_R-A_G-A_P-present',
            'seq_AO_R-O_P-absent',
            'seq_AO_R-A_P-present',
        ],
        'comprehension': {
            'use': false,
        },
        'trial': {
            'use': true,
        }
    },

    // Base case 2 items different tastes
    {
        'id': 'complementary-C_knows_B:Yes-C_knows_care:No-n_fruits(1;1)-Apple;Apple',
        'description': 'Red prefers O (unlike Green). Red takes A when Purple is both absent and present.',
        'timeline': [
            'sim_R-O_G-A_P-present',
            'seq_AO_R-A_P-absent',
            'seq_AO_R-A_P-present',
        ],
        'comprehension': {
            'use': false, // Removed by Tobi
            'Q0': 'Orange', // What does Red prefer?
            'Q1': 'Apple', // What does Green prefer?
            'Q2': 'Apple', // What does Red pick?
            'Q3': 'Yes', // Does Red know what Green prefers?
            'Q4': 'Yes', // Does Purple know what Red prefers?
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'complementary-C_knows_B:Yes-C_knows_care:No-n_fruits(1;1)-Orange;Orange',
        'description': 'Red prefers O (unlike Green). Red takes O when Purple is both absent and present.',
        'timeline': [
            'sim_R-O_G-A_P-present',
            'seq_AO_R-O_P-absent',
            'seq_AO_R-O_P-present',
        ],
        'comprehension': {
            'use': true,
            'Q0': 'Orange', // What does Red prefer?
            'Q1': 'Apple', // What does Green prefer?
            'Q2': 'Orange', // What does Red pick?
            'Q3': 'Yes', // Does Red know what Green prefers?
            'Q4': 'Yes', // Does Purple know what Red prefers?
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'complementary-C_knows_B:Yes-C_knows_care:No-n_fruits(1;1)-Apple;Orange',
        'description': 'Red prefers O (unlike Green). Red takes A when Purple is absent and O when Purple is present.',
        'timeline': [
            'sim_R-O_G-A_P-present',
            'seq_AO_R-A_P-absent',
            'seq_AO_R-O_P-present',
        ],
        'comprehension': {
            'use': false,
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'complementary-C_knows_B:Yes-C_knows_care:No-n_fruits(1;1)-Orange;Apple',
        'description': 'Red prefers O (unlike Green). Red takes O when Purple is absent and A when Purple is present.',
        'timeline': [
            'sim_R-O_G-A_P-present',
            'seq_AO_R-O_P-absent',
            'seq_AO_R-A_P-present',
        ],
        'comprehension': {
            'use': false,
        },
        'trial': {
            'use': true,
        }
    },


    // 3 items competitive tastes
    //// Both prefer Apple
    {
        'id': 'competitive-C_knows_B:Yes-C_knows_care:No-n_fruits(2;1)-Apple;Apple',
        'description': 'Red prefers A (same as Green). Red takes one of the two As both when Purple is absent and present.',
        'timeline': [
            'sim_R-A_G-A_P-present',
            'seq_AAO_R-A_P-absent',
            'seq_AAO_R-A_P-present',
        ],
        'comprehension': {
            'use': false,
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'competitive-C_knows_B:Yes-C_knows_care:No-n_fruits(2;1)-Orange;Orange',
        'description': 'Red prefers A (same as Green). Red takes O both when Purple is absent and present.',
        'timeline': [
            'sim_R-A_G-A_P-present',
            'seq_AAO_R-O_P-absent',
            'seq_AAO_R-O_P-present',
        ],
        'comprehension': {
            'use': false,
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'competitive-C_knows_B:Yes-C_knows_care:No-n_fruits(2;1)-Orange;Apple',
        'description': 'Red prefers A (same as Green). Red takes O when Purple is absent and of the two As when Purple is present.',
        'timeline': [
            'sim_R-A_G-A_P-present',
            'seq_AAO_R-O_P-absent',
            'seq_AAO_R-A_P-present',
        ],
        'comprehension': {
            'use': false,
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'competitive-C_knows_B:Yes-C_knows_care:No-n_fruits(2;1)-Apple;Orange',
        'description': 'Red prefers A (same as Green). Red takes one of the As when Purple is absent and of O Purple is present.',
        'timeline': [
            'sim_R-A_G-A_P-present',
            'seq_AAO_R-A_P-absent',
            'seq_AAO_R-O_P-present',
        ],
        'comprehension': {
            'use': false,
        },
        'trial': {
            'use': true,
        }
    },
    //// Red prefers Apple, Green prefers Orange
    {
        'id': 'complementary-C_knows_B:Yes-C_knows_care:No-n_fruits(2;1)-Apple;Apple',
        'description': 'Red prefers O (unlike Green). Red takes one of the two As when Purple is both absent and present.',
        'timeline': [
            'sim_R-O_G-A_P-present',
            'seq_AAO_R-A_P-absent',
            'seq_AAO_R-A_P-present',
        ],
        'comprehension': {
            'use': false,
            'Q0': 'Orange', // What does Red prefer?
            'Q1': 'Apple', // What does Green prefer?
            'Q2': 'Apple', // What does Red pick?
            'Q3': 'Yes', // Does Red know what Green prefers?
            'Q4': 'Yes', // Does Purple know what Red prefers?
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'complementary-C_knows_B:Yes-C_knows_care:No-n_fruits(2;1)-Orange;Orange',
        'description': 'Red prefers O (unlike Green). Red takes O when Purple is both absent and present.',
        'timeline': [
            'sim_R-O_G-A_P-present',
            'seq_AAO_R-O_P-absent',
            'seq_AAO_R-O_P-present',
        ],
        'comprehension': {
            'use': true,
            'Q0': 'Orange', // What does Red prefer?
            'Q1': 'Apple', // What does Green prefer?
            'Q2': 'Orange', // What does Red pick?
            'Q3': 'Yes', // Does Red know what Green prefers?
            'Q4': 'Yes', // Does Purple know what Red prefers?
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'complementary-C_knows_B:Yes-C_knows_care:No-n_fruits(2;1)-Apple;Orange',
        'description': 'Red prefers O (unlike Green). Red takes one of the two As when Purple is absent and O when Purple is present.',
        'timeline': [
            'sim_R-O_G-A_P-present',
            'seq_AAO_R-A_P-absent',
            'seq_AAO_R-O_P-present',
        ],
        'comprehension': {
            'use': false,
        },
        'trial': {
            'use': true,
        }
    },
    {
        'id': 'complementary-C_knows_B:Yes-C_knows_care:No-n_fruits(2;1)-Orange;Apple',
        'description': 'Red prefers O (unlike Green). Red takes O when Purple is absent and one of the two As when Purple is present.',
        'timeline': [
            'sim_R-O_G-A_P-present',
            'seq_AAO_R-O_P-absent',
            'seq_AAO_R-A_P-present',
        ],
        'comprehension': {
            'use': false,
        },
        'trial': {
            'use': true,
        }
    },
]