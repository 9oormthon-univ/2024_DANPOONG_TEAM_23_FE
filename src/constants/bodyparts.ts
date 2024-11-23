import Head from '~/assets/images/head.png'
import Face from '~/assets/images/face.png'
import NeckChest from '~/assets/images/neck-chest.png'
import Stomach from '~/assets/images/stomach.png'
import Waist from '~/assets/images/waist.png'
import Pelvis from '~/assets/images/pelvis.png'
import LegFoot from '~/assets/images/leg-foot.png'
import ArmHand from '~/assets/images/arm-hand.png'

const BODYPARTS = {
  HEAD: {
    title: '머리',
    image: Head,
    parts: {
      FOREHEAD: '이마',
      TEMPLE: '관자놀이',
      TOPOFHEAD: '정수리',
      BACKOFHEAD: '뒷머리',
      FULLHEAD: '머리 전체',
    },
  },
  FACE: {
    title: '얼굴',
    image: Face,
    parts: {
      EYE: '눈',
      NOSE: '코',
      MOUTH: '입',
      EAR: '귀',
      CHEEK: '볼',
      CHIN: '턱',
      FULLFACE: '얼굴 전체',
    },
  },
  NECK_CHEST: {
    title: '목/가슴',
    image: NeckChest,
    parts: {
      FRONTNECK: '앞쪽 목',
      BACKNECK: '뒷쪽 목',
      CENTRALCHEST: '중앙 가슴',
      RIGHTCHEST: '오른쪽 가슴',
      LEFTCHEST: '왼쪽 가슴',
      FULLCHEST: '가슴 전체',
    },
  },
  STOMACH: {
    title: '배',
    image: Stomach,
    parts: {
      UPPERSTOMACH: '윗배',
      LEFTSTOMACH: '왼쪽 배',
      FULLSTOMACH: '배 전체',
      LOWERSTOMACH: '아랫배',
      RIGHTSTOMACH: '오른쪽 배',
    },
  },
  WAIST: {
    title: '허리',
    image: Waist,
    parts: {
      UPPERWAIST: '위쪽 허리',
      LEFTWAIST: '왼쪽 허리',
      FULLWAIST: '허리 전체',
      LOWERWAIST: '아래쪽 허리',
      RIGHTWAIST: '오른쪽 허리',
    },
  },
  PELVIS: {
    title: '골반',
    image: Pelvis,
    parts: {
      LEFTPELVIS: '왼쪽 골반',
      FULLPELVIS: '골반 전체',
      GENITALS: '생식기',
      RIGHTPELVIS: '오른쪽 골반',
      HIPS: '엉덩이',
    },
  },
  LEG_FOOT: {
    title: '다리/발',
    image: LegFoot,
    parts: {
      THIGH: '허벅지',
      CALF: '종아리',
      FULLLEG: '다리 전체',
      KNEE: '무릎',
      ANKLE: '발목',
    },
  },
  ARM_HAND: {
    title: '팔/손',
    image: ArmHand,
    parts: {
      SHOULDER: '어깨',
      ELBOW: '팔꿈치',
      WRIST: '손목',
      UPPERARM: '윗팔',
      FOREARM: '아랫팔',
      HAND: '손',
      FULLARMHAND: '팔/손 전체',
    },
  },
} as const

export { BODYPARTS }
