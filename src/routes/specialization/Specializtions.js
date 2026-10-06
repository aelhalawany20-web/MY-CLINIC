import React from 'react'
import { Fragment } from 'react'
import SpecialHome from "./SpecialHome"

import kids from "./pictures/kids.jpg"
import abdomen from "./pictures/abdomen.png"
import heart from "./pictures/heart.jpg"
import heartChildren from "./pictures/heartchildren.png"
import nose from "./pictures/nose.png"
import surgery from "./pictures/surgery.jpg"
import surgeryChildren from "./pictures/surgerychildren.jpg"
import surgeryWomen from "./pictures/surgery.jpg"
import food from "./pictures/food.png"
import bones from "./pictures/bones.png"
import chest from "./pictures/chest.jpg"
import teeth from "./pictures/teeth.jpg"
import cupping from "./pictures/cupping.png"
import skin from "./pictures/skin.jpg"
import women from "./pictures/women.jpg"
import psychology from "./pictures/psychology.jpg"
import suger from "./pictures/suger.jpg"
import pathways from "./pictures/pathways.jpg"
import digestchildren from "./pictures/digestchildren.png"
import brain from "./pictures/brain.jpg"
import ray from "./pictures/ray.jpg"
import breastfeeding from "./pictures/breastfeeding.jpg"
import tests from "./pictures/tests.jpg"
import nursing from "./pictures/nursing.jpg"


function Specializtions() {
    const specializations = [
        {
            name: "عيادة الأطفال",
            link: "kids",
            photo: kids
        },
        {
            name: "عيادة الباطنة",
            link: "abdomen",
            photo: abdomen
        },
        {
            name: "عيادة القلب",
            link: "heart",
            photo: heart
        },
        {
            name: "عيادة القلب - أطفال",
            link: "heartChildren",
            photo: heartChildren
        },
        {
            name: "عيادة الأنف والأذن",
            link: "nose",
            photo: nose
        },
        {
            name: "عيادة الجراحة العامة",
            link: "surgery",
            photo: surgery
        },
        {
            name: "عيادة الجراحة - أطفال",
            link: "surgeryChildren",
            photo: surgeryChildren
        },
        {
            name: "عيادة الجراحة النسائية",
            link: "surgeryWomen",
            photo: surgeryWomen
        },
        {
            name: "عيادة التغذية العلاجية",
            link: "food",
            photo: food
        },
        {
            name: "عيادة العظام",
            link: "bones",
            photo: bones
        },
        {
            name: "عيادة الصدرية",
            link: "chest",
            photo: chest
        },
        {
            name: "عيادة الأسنان",
            link: "teeth",
            photo: teeth
        },
        {
            name: "عيادة الحجامة",
            link: "cupping",
            photo: cupping
        },
        {
            name: "عيادة الجلدية",
            link: "skin",
            photo: skin
        },
        {
            name: "عيادة النسا والتوليد",
            link: "women",
            photo: women
        },
        {
            name: "عيادة النفسية",
            link: "psychology",
            photo: psychology
        },
        {
            name: "عيادة الغدد الصماء والسكر",
            link: "suger",
            photo: suger
        },
        {
            name: "عيادة المسالك",
            link: "pathways",
            photo: pathways
        },
        {
            name: "عيادة الجهاز الهضمى - أطفال",
            link: "digestchildren",
            photo: digestchildren
        },
        {
            name: "عيادة المخ والأعصاب",
            link: "brain",
            photo: brain
        },
        {
            name: "عيادة الأشعة والدوبلر",
            link: "ray",
            photo: ray
        },
        {
            name: "عيادة الرضاعة",
            link: "breastfeeding",
            photo: breastfeeding
        },
        {
            name: "عيادة الطوارئ - أطفال",
            link: "Emergencychildren",
            photo: kids
        },
        {
            name: "عيادة نحاليل طبية",
            link: "tests",
            photo: tests
        },
        {
            name: "عيادة خدمات تمريضية",
            link: "nursing",
            photo: nursing
        }
    ]
  return (
    <Fragment>
      <SpecialHome details={specializations}/>
    </Fragment>
  )
}

export default Specializtions
