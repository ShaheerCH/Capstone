const speakers = [
  {
    photo: './media/BinanceF.svg',
    name: 'Changpeng Zhao',
    title: 'Binance CEO',
    description:
      'Major stakeholder and contributor to the Terra 2.0 project Launch',
  },

  {
    photo: './media/terraF.svg',
    name: 'Don Kwon',
    title: 'Terra CEO',
    description:
      'Founder of Terra grounp and created the Terra 2.0 project Launch',
  },

  {
    photo: './media/rippF.svg',
    name: 'Hedge Law',
    title: 'Hedge Fund',
    description:
      'Major stakeholder and Financer to the Terra 2.0 project Launch',
  },

  {
    photo: './media/ethF.svg',
    name: 'Vitalik Buterin',
    title: 'Etherium CEO',
    description:
      'Creator of etherium and manages the 2.0 development and also major financer',
  },

  {
    photo: './media/coinF.svg',
    name: 'Brain Armstrong',
    title: 'Coinbase CEO',
    description:
      'Creator of Coinbase a major market leading crypto broker amd validator',
  },

  {
    photo: './media/bradF.svg',
    name: 'Brad Gunt',
    title: 'Hedge Fund',
    description:
      'Major financer to 2.0 development and deployment and a cryto-visionary',
  },
];
const SpeakerDiv = document.getElementById('speakers-grid');
const SpeakerContainer = speakers
  .map(
    (speaker) => `<div class="speaker-container">
    <div class="speaker-image">
      <img src="${speaker.photo}" alt="Don" />
    </div>
    <div class="speaker-info">
      <div class="speaker-name">
        <h4>${speaker.name}</h4>
        <h6 class="speaker-details">${speaker.title}</h6>
        <hr />
      </div>
      <div class="speaker-description">
        <p>
        ${speaker.description}
        </p>
      </div>
    </div>
  </div>`,
  )
  .join('');

SpeakerDiv.innerHTML += SpeakerContainer;
