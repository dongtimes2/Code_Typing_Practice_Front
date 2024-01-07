import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`${import.meta.env.VITE_SERVER_URL_DEV}/languages`, () => {
    return HttpResponse.json([
      {
        id: 'python',
        name: 'Python',
        description:
          '파이썬은 1989년 귀도 반 로썸(Guido van Rossum)에 의해 개발된 고급 프로그래밍 언어로, 2018년 현재 실무와 교육 양쪽 모두에서 엄청난 인기를 끌고 있는 언어입니다. 배우기 쉬운 동시에 속도도 빠르며 다양한 확장성을 가지고 있습니다.',
        imagePath:
          'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        description:
          '자바스크립트는 객체 기반의 스크립트 언어입니다. 주로 웹 브라우저에서 사용되나, Node.js를 사용하면 브라우저 외부의 환경에서도 사용할 수 있습니다. 현재 컴퓨터나 스마트폰 등에 포함된 대부분의 웹브라우저에는 자바스크립트 인터프리터가 내장되어 있습니다.',
        imagePath:
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
      },
      {
        id: 'c',
        name: 'C',
        description:
          'C언어는 현재 사용되고 있는 거의 모든 컴퓨터 시스템에서 사용할 수 있는 프로그래밍 언어입니다. 현대 운영체제의 커널은 대부분 C언어를 이용해 구현되어 있습니다. 이처럼 C언어는 시스템 프로그램에 가장 잘 어울리지만, 응용 프로그램에서도 사용됩니다.',
        imagePath:
          'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
      },
      {
        id: 'rust',
        name: 'Rust',
        description:
          'Rust는 Mozilla가 개발한 현대적이고 안정적인 프로그래밍 언어로, 안전성, 성능, 병렬성, 그리고 생산성을 강조하는 특징을 갖추고 있습니다. Rust는 높은 성능을 제공하며 C/C++과 경쟁할 만큼 빠릅니다. 또한 병렬 프로그래밍을 안전하게 지원하고 다중 스레딩 문제를 줄여줍니다.',
        imagePath:
          'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg',
      },
      {
        id: 'java',
        name: 'Java',
        description:
          'Java는 플랫폼 독립성을 갖춘 객체 지향 프로그래밍 언어로, 강한 타입 시스템과 멀티 스레딩 지원을 제공하여 대규모 응용 프로그램과 시스템 개발에 적합하며, 다양한 응용 분야에서 널리 사용되는 언어입니다.',
        imagePath:
          'https://upload.wikimedia.org/wikipedia/de/e/e1/Java-Logo.svg',
      },
    ]);
  }),
];
