export const dummyData = {
  "0": {
    id: "0",
    name: "자두",
    phone: "010-0000-0000"
  },
  "1": {
    id: "1",
    name: "앵두",
    phone: "010-1111-1111"
  },
  "2": {
    id: "2",
    name: "호두",
    phone: "010-2222-2222"
  },
  "3": {
    id: "3",
    name: "블랙핑크",
    phone: "010-3333-3333"
  },
  "4": {
    id: "4",
    name: "뚜두뚜두",
    phone: "010-4444-4444"
  },
  "5": {
    id: "5",
    name: "뚜",
    phone: "010-5555-5555"
  }
};

export var nextId = Object.keys(dummyData).length;

export const setNextId = () => {
  nextId++;
};