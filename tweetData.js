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
      "Watching the Dodgers/Red Sox final innings. It is amazing how a manager takes out a pitcher who is loose & dominating through almost 7 innings, Rich Hill of Dodgers, and brings in nervous reliever(s) who get shellacked. 4 run lead gone. Managers do it all the time, big mistake!",
    output: { trump: 1 }
  },
  {
    input:
      "Prozentuale Stimmverteilung, Gewinne und Verluste, Wahlkreisergebnisse und mehr. Ab 18.00 Uhr gibt es alle wichtigen Zahlen zur #ltwhe18 in unseren interaktiven Live-Grafiken:  https://www.zvw.de/inhalt.grafiken-die-landtagswahl-2018-in-hessen.c748b6c8-fbb6-4902-8747-d26e46b9d3a5.html … @dpa-electionslive via @zvw_redaktion #ltwhessen",
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
  }
];
