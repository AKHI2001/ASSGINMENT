var g_class = {
    'name': "DSMNRU",
    'instructor': {
      'name': "Dinesh singh",
      'subject': "thermodynamic"
    },
    'students': [{
        'name': 'rahul',
        'marks': 80,
      },
      {
        'name': 'deepika singh',
        'marks': 89,
      },
      {
        'name': 'akhilesh',
        'marks': 77,
      },
      {
        'name': 'Ayush',
        'marks': 70,
      },
      {
       'name': 'hena',
       'marks': 90,
      },
      {
       'name': 'ganesh gupta',
       'marks': 85,
      },
      {
       'name': 'yogesh',
       'marks': 87,
      }
    ],
  };
  for(var i=0; i<g_class.students.length;i++)
  {
      if(g_class.students[i].marks > 85){
          console.log(g_class.students[i].name);
        }
  }
