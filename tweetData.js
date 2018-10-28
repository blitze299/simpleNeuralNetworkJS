//Initiieren und befüllen des trainingData[] Arrays (Feld)
const tweetData = [
  {
    input:
      "On the Nature cover this week: How early life shapes the infant gut microbiome and risk of disease https://go.nature.com/2CD3ovO ",
    output: { nature: 1 }
  },
  {
    input:
      "News & Views: A novel approach to boosting levels of nicotinamide adenine dinucleotide (NAD+) enhances mitochondrial function, increases the lifespan of worms, and provides protective health benefits in mice, according to a paper in Nature.",
    output: { nature: 1 }
  },
  {
    input:
      "Efficient muscle fibres allow wildebeest to travel long distances without overheating, reports a paper published in Nature. These findings suggest how animals living in the desert can cope with seasonal and local variations in rainfall, food, and climate.",
    output: { nature: 1 }
  },
  {
    input:
      "Global moral preferences for how driverless cars should decide who to spare in unavoidable accidents are reported in Nature. The findings may inform discussions around the future development of socially acceptable AI ethics. ",
    output: { nature: 1 }
  },
  {
    input:
      "The quantification in real time of the expansion state of tens of thousands of pigmented skin cells from cuttlefish is reported in Nature.",
    output: { nature: 1 }
  },
  {
    input:
      "Rock structures that have previously been proposed to be the earliest-known remnants of life may be non-biological in origin, reports a study published in Nature.",
    output: { nature: 1 }
  },
  {
    input:
      "The fibre-optic cables that carry Internet traffic can also be used for a powerful form of the strange phenomenon known as quantum teleportation",
    output: { nature: 1 }
  },
  {
    input:
      "The microbiomes of infants without type 1 diabetes harbour more genes related to fermentation and short-chain fatty-acid synthesis that are associated with a protective effect, according to a study published in Nature. ",
    output: { nature: 1 }
  },
  {
    input:
      "Researchers used gene sequencing to analyse 12,500 stool samples from 903 children aged 3 to 46 months old. Their findings, reported in Nature, reveal that the developing gut microbiome undergoes three distinct phases of microbiome progression.",
    output: { nature: 1 }
  },
  {
    input:
      "A satellite peering at Earth from a vantage point almost 1.5 million kilometres away can track volcanic eruptions more accurately than spacecraft orbiting much closer to the planet’s surface",
    output: { nature: 1 }
  },
  {
    input:
      "The development of functional MRI to measure brain activity is described in ‘The New Mind Readers’ written by experimental psychologist and neuroimaging pioneer, Russell Poldrack.  Chris Baker discusses Poldrack’s attempts to decode these scans.",
    output: { nature: 1 }
  },
  {
    input:
      "A 1,000-year-old virus recovered from an ancient Native American settlement is the oldest plant virus ever found  #ResearchHighlight",
    output: { nature: 1 }
  },
  {
    input:
      "Certain fields draw frequent attacks on social media and other digital platforms. Three scientists explain how they navigate the minefields.",
    output: { nature: 1 }
  },
  {
    input:
      "The legalization of weed in Canada has opened up opportunities for cannabis research.",
    output: { nature: 1 }
  },
  {
    input:
      "Editorial: The way in which a dandelion seed is dispersed is a great example of how evolution can produce ingenious solutions to specific problems.",
    output: { nature: 1 }
  },
  {
    input:
      "The results of a study published in Nature demonstrate a strategy to restore breathing after central nervous system trauma by targeting a neuronal subpopulation. https://go.nature.com/2pPmR4D",
    output: { nature: 1 }
  },
  {
    input:
      "Scientists have imaged mouse embryos in real-time and unprecedented detail, illuminating how the developing animals establish their basic body plans and begin to form organs #ResearchHighlight",
    output: { nature: 1 }
  },
  {
    input:
      "The next major outbreak won’t be due to a lack of preventative technologies, but rather by misinformation given on social media, says @ProfHeidiLarson.",
    output: { nature: 1 }
  },
  {
    input:
      "Editorial: A Consensus Statement published in @NatureRevMicro  represents a landmark effort to find better ways to prescribe antibiotics.",
    output: { nature: 1 }
  },
  {
    input:
      "Flipping light-sensitive proteins upside down in cell membranes has expanded the utility of a popular technique for studying the brain #ResearchHighlight",
    output: { nature: 1 }
  },
  {
    input:
      "News & Views: A new analysis of ancient rocks in Greenland that were previously interpreted to be stromatolites is argued to have arose by non-biological process, according to a study in Nature.",
    output: { nature: 1 }
  },
  {
    input:
      "Watching the Dodgers/Red Sox final innings. It is amazing how a manager takes out a pitcher who is loose & dominating through almost 7 innings, Rich Hill of Dodgers, and brings in nervous reliever(s) who get shellacked. 4 run lead gone. Managers do it all the time, big mistake!",
    output: { trump: 1 }
  },
  {
    input:
      "Funny how lowly rated CNN, and others, can criticize me at will, even blaming me for the current spate of Bombs and ridiculously comparing this to September 11th and the Oklahoma City bombing, yet when I criticize them they go wild and scream, it’s just not Presidential!",
    output: { trump: 1 }
  },
  {
    input:
      "...This evil Anti-Semitic attack is an assault on humanity. It will take all of us working together to extract the poison of Anti-Semitism from our world. We must unite to conquer hate.",
    output: { trump: 1 }
  },
  {
    input:
      "All of America is in mourning over the mass murder of Jewish Americans at the Tree of Life Synagogue in Pittsburgh. We pray for those who perished and their loved ones, and our hearts go out to the brave police officers who sustained serious injuries...",
    output: { trump: 1 }
  },
  {
    input:
      "As you know, earlier today there was a horrific shooting targeting and killing Jewish Americans at the Tree of Life Synagogue in Pittsburgh, Pennsylvania. The shooter is in custody, and federal authorities have been dispatched to support state and local police...",
    output: { trump: 1 }
  },
  {
    input:
      "Fantastic evening in Charlotte, North Carolina with great PATRIOTS. Get out and VOTE for @buddforcongress and @MarkHarrisNC9! http://Vote.GOP  #MAGARally ",
    output: { trump: 1 }
  },
  {
    input:
      "If you meet every day with optimism – if you confront every obstacle with determination – if you refuse to give up, if you never quit, if you face every challenge with confidence and pride – then there is no goal you cannot achieve, and no dream beyond your reach! #YBLS2018",
    output: { trump: 1 }
  },
  {
    input:
      "It is my great honor to be with so many brilliant, courageous, patriotic, and PROUD AMERICANS. Seeing all of you here today fills me with extraordinary confidence in America’s future. Each of you is taking part in the Young Black Leadership Summit because you are true leaders...",
    output: { trump: 1 }
  },
  {
    input:
      "I want to applaud the FBI, Secret Service, Department of Justice, the U.S. Attorneys’ Office for the Southern District of New York, the NYPD, and all Law Enforcement partners across the Country for their incredible work, skill and determination!",
    output: { trump: 1 }
  },
  {
    input:
      "I will be speaking at the Young Black Leadership Summit in 15 minutes where I will address the investigation into the bomb packages.",
    output: { trump: 1 }
  },
  {
    input:
      ".@BrucePoliquin from Maine is a great Congressman. He is in a tough fight against a very liberal Nancy Pelosi Democrat. Bruce has helped bring JOBS back to his State and totally protects your Great Second Amendment. We need to keep Bruce in Washington. He has my Full Endorsement!",
    output: { trump: 1 }
  },
  {
    input:
      ".@MikeDunleavyGov will make a fantastic Governor of Alaska. Mike is for Energy and Jobs, is tough on Crime, loves our Vets and our Great Second Amendment. Mike has my Complete and Total Endorsement!",
    output: { trump: 1 }
  },
  {
    input:
      ".@LloydSmuckerPA is doing a great job for the people of Pennsylvania. He is strong on the Border, Crime, the Military, our Vets and the 2nd Amendment. Lloyd has my Total Endorsement!",
    output: { trump: 1 }
  },
  {
    input:
      ".@Troy_Balderson of Ohio is doing a great job as your Congressman, already very respected in Washington. Get out and VOTE for Troy - we need him – great guy – has my Total Endorsement!",
    output: { trump: 1 }
  },
  {
    input:
      ".@JohnChrin of Pennsylvania is fantastic. He is strong on the Border, Crime, the Military, our Vets and the 2nd Amendment. He is a powerful vote for #MAGA and loves the Great State of Pennsylvania. Please get out and vote for John, he has my Total and very Strong Endorsement!",
    output: { trump: 1 }
  },
  {
    input:
      "...I agree with their stance 100%, and the United States is likewise taking a very hard line on illegal immigration. The Prime Minister is working very hard on the economy of Italy - he will be successful!",
    output: { trump: 1 }
  },
  {
    input:
      "Just spoke with Prime Minister @GiuseppeConteIT of Italy concerning many subjects, including the fact that Italy is now taking a very hard line on illegal immigration...",
    output: { trump: 1 }
  },
  {
    input:
      "Spoke with French President @EmmanuelMacron this morning. Discussed many topics including the very exciting upcoming visit to Paris where @FLOTUS Melania and I will attend the Armistice Day Centennial Commemoration!",
    output: { trump: 1 }
  },
  {
    input:
      "To those in the Caravan, turnaround, we are not letting people into the United States illegally. Go back to your Country and if you want, apply for citizenship like millions of others are doing!",
    output: { trump: 1 }
  },
  {
    input:
      "“Remarks by President Trump on a Year of Historic Progress and Action to Combat the Opioid Crisis” http://45.wh.gov/b32H63",
    output: { trump: 1 }
  },
  {
    input:
      "The New York Times has a new Fake Story that now the Russians and Chinese (glad they finally added China) are listening to all of my calls on cellphones. Except that I rarely use a cellphone, & when I do it’s government authorized. I like Hard Lines. Just more made up Fake News!",
    output: { trump: 1 }
  }
];
