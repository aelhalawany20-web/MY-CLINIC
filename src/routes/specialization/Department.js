import React from 'react'

import DoctorCard from './DoctorCard'
// pictures
import Emad from "./pictures/emad helw3.png"
import AlaaHelw from "./pictures/alaa helw3.png"
import Ashraf from "./pictures/ashraf abdelmonem2.png"
import basuny from "./pictures/mohamed basuny2.png"
import Ali from "./pictures/ali nageeb2.png"
import Alsafy from "./pictures/no photo men.png"
import Mohamed from "./pictures/no photo men.png"
import Esraa from "./pictures/esraa elaba3.png"
import Ahmed from "./pictures/no photo men.png"
import Sara from "./pictures/sara elaskary2.png"
import Mahmoud from "./pictures/mahmod abbas2.png"
import Nassar from "./pictures/ahmed nassar2.png"
import Khaled from "./pictures/no photo men.png"
import Elham from "./pictures/no photo women.png"
import Reta from "./pictures/no photo women.png"
import Yaser from "./pictures/yaser abdallah2.png"
import Fady from "./pictures/fady aglan3.png"
import Menna from "./pictures/mennat allah2.png"
import Omar from "./pictures/omar raafat3.png"
import Amr from "./pictures/no photo men.png"
import Mahran from "./pictures/khaled mahran1.png"
import Saleh from "./pictures/no photo men.png"
import Asmaa from "./pictures/asmaa bahnasy3.png"
import samar from "./pictures/samar ahmed aly2.png"
import Amany from "./pictures/amany gad2.png"
import Shimaa from "./pictures/no photo women.png"
import Dina from "./pictures/dina abdelmonem2.png"
import Wahba from "./pictures/no photo men.png"
import Fawzy from "./pictures/mohamed fawzy2.png"
import Ismael from "./pictures/no photo men.png"
import Mostafa from "./pictures/no photo men.png"
import Fathy from "./pictures/no photo men.png"
import Alaa from "./pictures/alaa elsayed1.png"
import Saly from "./pictures/saly alaaeldin2.png"
import Shahd from "./pictures/no photo women.png"
import Tayser from "./pictures/tayser hasan2.png"
import Mariam from "./pictures/no photo women.png"
import Azmy from "./pictures/azmy elsayed2.png"
import Haythem from "./pictures/no photo men.png"
import Mohaned from "./pictures/mohaned mostafa4.png"
import Abeer from "./pictures/abeer tag2.png"
import Abdelhaleem from "./pictures/mohamed abdelhalem2.png"
import Gehan from "./pictures/gehan khaled1.png"

const Department = () => {
  const doctors = {
    children:{
      1:{
        doctor: "د.عماد الحلوانى",
        degree: "استشارى طب الأطفال وحديثى الولادة",
        image: Emad,
        "working Time":{
          "doy One":{
            day: "الأحد - الثلاثاء - الخميس",
            time: "10ص - 11م"
          },
          "day Two":{
            day: "السبت - الأربعاء",
            time: "10ص - 7م"
          }
        }
      },
      2:{
        doctor: "د. علاء حسن",
        degree: "استشارى طب الأطفال وحديثى الولادة",
        image: AlaaHelw,
        "working Time":{
          "day One":{
            day: "السبت - الأربعاء",
            time: "7م - 11م"
          },
          "day Two":{
            day: "الاثنين",
            time: "11ص - 11م"
          },
        }
      }
    },
    abdomen:{
      1:{
        doctor: "د. أشرف عبدالمنعم",
        degree: "استشارى أمراض الباطنة والجهاز الهضمى",
        image: Ashraf,
        "working Time":{
          "day One":{
            day: "السبت إلى الخميس",
            time: "4 - 6م"
          }
        }
      },
      2:{
        doctor: "د. محمد بسيونى",
        degree: "أخصائى أمراض الباطنة العامة والطوارئ ",
        image: basuny,
        "working Time":{
          "day One":{
            day: "السبت - الأربعاء",
            time: "6 - 9م"
          },
          "day Two":{
            day: "الأحد",
            time: "7 - 9م"
          },
        }
      }
    },
    bones:{
      1:{
        doctor: "د.على نجيب على",
        degree: "اخصائى العظام وجراحات العظام وإصابات الملاعب",
        image: Ali,
        "working Time":{
          "day One":{
            day: "السبت - الخميس",
            time: "8م"
          }
        }
      },
      2:{
        doctor: "د. الصافى بيومى",
        degree: "اخصائى العظام وجراحات العظام",
        image: Alsafy,
        "working Time":{
          "day One":{
            day: "الاثنين",
            time: "7 - 9م"
          }
        }
      },
      3:{
        doctor: "د.محمد حسين",
        degree: "اخصائى العظام وجراحات العظام",
        image: Mohamed,
        "working Time":{
          "day One":{
            day: "الثلاثاء - الأربعاء",
            time: "7 - 9م"
          }
        }
      }
    },
    brain:{
      1:{
        doctor: "د.إسراء عليبة",
        degree: "اخصائى أمراض المخ والأعصاب",
        image: Esraa,
        "working Time":{
          "day One":{
            day: "الثلاثاء - الخميس",
            time: "2 - 4م"
          }
        }
      },
      2:{
        doctor: "د.أحمد ناصر",
        degree: "اخصائى أمراض المخ والأعصاب",
        image: Ahmed,
        "working Time":{
          "day One":{
            day: "الأربعاء",
            time: "5م"
          }
        }
      }
    },
    brainchildren:{
      1:{
        doctor: "د.سارة العسكرى",
        degree: "اخصائى الأمراض العصبية والسلوكية للأطفال",
        image: Sara,
        "working Time":{
          "day One":{
            day: "الجمعة الأولى من كل شهر",
          }
        }
      }
    },
    breastfeeding:{
      1:{
        doctor: "د.جيهان خالد",
      degree: "مدرب رضاعة طبيعية",
      image: Gehan,
        "working Time":{
          "day One":{
            day: "الأربعاء",
            time: "10ص"
          }
        }
      }
    },
    chest:{
      1:{
        doctor: "د.محمود عباس",
        degree: "اخصائى أمراض الصدر والحساسية",
        image: Mahmoud,
        "working Time":{
          "day One":{
            day: "السبت",
            time: "7.30م"
          },
          "day Two":{
            day: "الثلاثاء",
            time: "9.30 - 11م"
          },
        }
      },
      2:{
        doctor: "د.أحمد نصار",
        degree: "اخصائى أمراض الصدر والحساسية",
        image: Nassar,
        "working Time":{
          "day One":{
            day: "الحجز المسبق",
          }
        }
      }
    },
    cupping:{
      1:{
        doctor: "د.خالد حسين",
        degree: "استشارى الحجامة",
        image: Khaled,
        "working Time":{
          "day One":{
            day: "السبت إلى الخميس",
          }
        }
      },
      2:{
        doctor: "د.الهام فايق",
        degree: "استشارى الحجامة",
        image: Elham,
        "working Time":{
          "day One":{
            day: "السبت إلى الخميس",
          }
        }
      }
    },
    digestchildren:{
      1:{
        doctor: "د.ريتا أمجد",
        degree: "اخصائى الجهاز الهضمى فى الأطفال",
        image: Reta,
        "working Time":{
          "day One":{
            day: "الاثنين",
            time: "3م"
          }
        }
      }
    },
    food:{
      1:{
        doctor: "د.ياسر عبدالله",
        degree: "اخصائى التغذية العلاجية والسمنة والنحافة",
        image: Yaser,
        "working Time":{
          "day One":{
            day: "السات - الثلاثاء",
            time: "5 - 7م"
          }
        }
      },
      2:{
        doctor: "د.فادى عجلان",
        degree: "اخصائى التغذية العلاجية والسمنة والنحافة",
        image: Fady,
        "working Time":{
          "day One":{
            day: "الأحد",
            time: "3 - 9م"
          }
        }
      }
    },
    heart:{
      1:{
        doctor: "د.منةالله محمود",
        degree: "استشارى أمراض القلب والأوعية الدموية",
        image: Menna,
        "working Time":{
          "day One":{
            day: "السبت",
            time: "8 - 10م"
          },
          "day Two":{
            day: "الاثنين",
            time: "5 - 7م"
          },
        }
      }
    },
    heartchildren:{
      1:{
        doctor: "د.عمر رأفت",
        degree: "استشارى أمراض قلب الأطفال",
        image: Omar,
        "working Time":{
          "day One":{
            day: "الأربعاء - الخميس",
            time: "6 - 8م"
          },
        }
      }
    },
    nose:{
      1:{
        doctor: "د.عمرو حبيبة",
        degree: "اخصائى الأنف والأذن والحنجرة",
        image: Amr,
        "working Time":{
          "day One":{
            day: "السبت",
            time: "6.30 - 8.30م"
          },
          "day Two":{
            day: "الأربعاء",
            time: "4.30 - 6.30م"
          }
        }
      },
      2:{
        doctor: "د. حالد مهران",
        degree: "اخصائى الأنف والأذن والحنجرة والمناظير",
        image: Mahran,
        "working Time":{
          "day One":{
            day: "الأحد - الاثنين - الأربعاء",
            time: "7 - 9م"
          }
        }
      }
    },
    pathways:{
      1:{
        doctor: "د.محمد صالح",
        degree: "اخصائى المسالك",
        image: Saleh,
        "working Time":{
          "day One":{
            day: "الاثنين - الأربعاء",
            time: "2.30 - 4.30م"
          }
        }
      }
    },
    psychology:{
      1:{
        doctor: "د.أسماء البهنسى",
        degree: "اخصائى الصحة النفسية والدعم النفسى",
        image: Asmaa,
        "working Time":{
          "day One":{
            day: "الأحد - الأربعاء",
            time: "10ص"
          }
        }
      },
      2:{
        doctor: "د. سمر أحمد على",
        degree: "استشارى الصحة النفسية والارشاد الأسرى",
        image: samar,
        "working Time":{
          "day One":{
            day: "الاثنين - الأربعاء",
          }
        }
      }
    },
    ray:{
      1:{
        doctor: "د.أمانى جاد",
        degree: "استشارى الأشعة التلفزيونية والدوبلر",
        image: Amany,
        "working Time":{
          "day One":{
            day: "الأربعاء - الخميس",
            time: "6 - 9م"
          }
        }
      }
    },
    skin:{
      1:{
        doctor: "د.شيماء السيد",
        degree: "اخصائى الأمراض الجلدية",
        image: Shimaa,
        "working Time":{
          "day One":{
            day: "الأحد - الاثنين - الأربعاء",
            time: "3.30 - 5.30م"
          }
        }
      }
    },
    suger:{
      1:{
        doctor: "د.دينا عبدالمنعم",
        degree: "مدرس واستشارى الغدد الصماء والسكر فى الأطفال",
        image: Dina,
        "working Time":{
          "day One":{
            day: "الأحد",
            time: "5.30 - 7.30م"
          }
        }
      }
    },
    surgery:{
      1:{
        doctor: "د.محمد وهبة",
        degree: "استشارى الجراحة العامة والمناظير",
        image: Wahba,
        "working Time":{
          "day One":{
            day: "السبت - الأربعاء",
            time: "3 - 4م"
          }
        }
      },
      2:{
        doctor: "د. محمد فوزى",
        degree: "استشارى الجراحة العامة والمناظير",
        image: Fawzy,
        "working Time":{
          "day One":{
            day: "السبت",
            time: "4 - م"
          },
          "day Two":{
            day: "الأحد - الثلاثاء - الأربعاء - الخميس",
            time: "5 - 6م"
          }
        }
      },
      3:{
        doctor: "د.محمد إسماعيل",
        degree: "استشارى الجراحة العامة وجراحة الأطفال",
        image: Ismael,
        "working Time":{
          "day One":{
            day: "الأحد - الثلاثاء - الأربعاء - الخميس",
            time: "3 - 4م"
          }
        }
      },
      4:{
        doctor: "د. مصطفى صيام",
        degree: "استشارى الجراحة العامة والمناظير ",
        image: Mostafa,
        "working Time":{
          "day One":{
            day: "الأربعاء - الخميس",
            time: "8 - 10م"
          }
        }
      }
    },
    surgerychildren:{
      1:{
        doctor: "د.عمر فتحى",
        degree: "استشارى الجراحة العامة وجراحة الأطفال",
        image: Fathy,
        "working Time":{
          "day One":{
            day: "الاثنين",
            time: "8م"
          }
        }
      }
    },
    surgerywomen:{
      1:{
        doctor: "د.آلاء السيد",
        degree: "اخصائية الجراحة العامة وجراحات أورام الثدى",
        image: Alaa,
        "working Time":{
          "day One":{
            day: "السبت - الثلاثاء - الخميس",
          }
        }
      },
      2:{
        doctor: "د. سالى علاءالدين",
        degree: "اخصائى الجراحة العامة وجراحة المناظير",
        image: Saly,
        "working Time":{
          "day One":{
            day: "الأحد",
            time: "12 - 2م"
          },
          "day Two":{
            day: "الأربعاء",
            time: "6.30 - 8.30م"
          }
        }
      }
    },
    teeth:{
      1:{
        doctor: "د.شهد ",
        degree: "اخضائى جراحة الفم وزراعة الأسنان",
        image: Shahd,
        "working Time":{
          "day One":{
            day: "السبت - الثلاثاء",
            time: "2 - 5م"
          }
        }
      },
      2:{
        doctor: "د.تيسير حسن",
        degree: "اخصائى طب أسنان الأطفال",
        image: Tayser,
        "working Time":{
          "day One":{
            day: "السبت - الاثنين - الأربعاء",
            time: "2 - 5م"
          }
        }
      },
      3:{
        doctor: "د.مريم",
        degree: "اخضائى جراحة الفم وزراعة الأسنان",
        image: Mariam,
        "working Time":{
          "day One":{
            day: "الأحد - الاثنين - الأربعاء - الخميس",
            time: "2 - 5م"
          }
        }
      },
      4:{
       doctor: "د.عزمى السيد",
        degree: "اخضائى جراحة الفم وزراعة الأسنان ",
        image: Azmy,
        "working Time":{
          "day One":{
            day: "الأحد",
            time: "5 - 11م"
          }
        }
      },
      5:{
        doctor: "د.هيثم",
        degree: "اخضائى جراحة الفم وزراعة الأسنان ",
        image: Haythem,
        "working Time":{
          "day One":{
            day: "الثلاثاء - الخميس",
            time: "5 - 11م"
          }
        }
      }
    },
    women:{
      1:{
        doctor: "د.مهند مصطفى ",
        degree: "أخصائى النسا والتوليد وتأخر الإنجاب",
        image: Mohaned,
        "working Time":{
          "day One":{
            day: "الأحد - الثلاثاء - الخميس",
            time: "3 - 7م"
          }
        }
      },
      2:{
        doctor: "د. عبير تاج السر",
        degree: "استشارى النسا والتوليد",
        image: Abeer,
        "working Time":{
          "day One":{
            day: "الاثنين - الأربعاء",
            time: "7 - 9م"
          }
        }
      },
      3:{
        doctor: "د. محمد عبدالحليم",
      degree: "أخصائى النسا والتوليد",
      image: Abdelhaleem,
        "working Time":{
          "day One":{
            day: "الحجز المسبق",
          }
        }
      }
    },
  }

  return (
    <div className='department'>
      <DoctorCard details={doctors}/>
    </div>
  )
}

export default Department