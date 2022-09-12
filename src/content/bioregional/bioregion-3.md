---
layout: post
excerpt: "Mapping Bioregions"
title: "Approaches to the challenges of mapping bioregions"
author: Tom Watson
tags: ["bioregionalism", "mapping", "Terran", "Hylo"]
image: ../img/high.JPG
date: "2022-05-30T23:46:37.121Z"
draft: false
---

_This is the third post in a three part series on bioregions. If you aren't familiar with bioregions, best to start at [part one](https://twicefire.com/bioregional/bioregion-1/)_

We want to start mapping out bioregions. We have realized there are lots of fiddly questions and nuance that come from that. We going to try sort through all that anyway.

### What process can we use to determine bioregions in the mapping context?

What are the key things we need to consider in a process for mapping something? In all cases, we tend to consider questions including:

- How ought it be represented via geometry?
- What data can we map to the base geometry and can we get it?

And following on from those questions:

- How ought it be shared?
- Do we have the skill-sets, resources, access and time to achieve the scheme that is the outcome of answering these questions?
- What sort of process do we use to take all of the above geometries, data and inputs to actually generate bioregions?
- How might these choices help or hinder other processes layered on top of this system (voting systems)

For bioregions, as understood by bioregionalists, we also consider the human cultural aspect

- How do we create bioregions that resonate with folks that live in that region?

These questions or considerations also form an interlocking bundle; its very hard to consider them one at a time, figure out that piece out in isolation, and then move on to the next question. If we attempt to solve for only one question at a time, it can defacto lock us into only a narrow range of options for other considerations.

And finally, a mapping scheme is just an exercise in imagination unless it is adopted by folks. Figuring out who are the various adoptees, users and champions of a mapping scheme, and when to involve them, is very much the meta-art of building a mapping scheme. This post is very much a result of trying to address that process, and if you've read this far, odds are you are one of those potential stakeholders!

This post is going to be a living journal of all of my research and thinking about all these different considerations. As of 30 May 2022 (and prior), I have had an idea for a uncommon scheme to achieve the goal of mapping bioregions, but I want to layout the alternative concepts and justify the trade-offs inherent in any of the design choices one must make in these matters. Wish me (and us) luck!

### How ought it be represented via geometry?

["The map is not the territory"](https://en.wikipedia.org/wiki/Map%E2%80%93territory_relation) is a relatively well-known philosophical phrase that denotes that the representations and models we make about reality are not reality themselves, despite their benefit in allowing us to share understandings of reality. The geometry is the literal representation of territory; the sort of geometry we use to represent something will shape how we think about that something. And, may I remind us always, the representation is always a reduction of what it represents; and thus, it is 'always wrong' in some sense. [All representations (models) are wrong, some are useful.](https://en.wikipedia.org/wiki/All_models_are_wrong)

With that prelude, how do different options shape up?

###### Unique polygons
Unique in the sense that each bioregion has its own custom geometry, not dependent on a known set of geometries (like parcels or county boundaries). This, for one bioregion, is very straight-forward and familiar. When we are creating a series of bioregions though, the flexiblity of unique polygons adds complexity fast. We have to enforce topologically sensible boundaries; random little gaps or overlaps between bioregions can lead to confusion in some instances. A second consideration is that creating custom polygons for a large number of bioregions can be a lot of work, and we cannot easily crowd-source that because of the topological concerns. Mapping data from other sources into these custom polygons is also a little more onerous than other options. 

###### 'Known' polygons
Existing polygon systems include: counties, shires, parcels, watershed systems, zipcodes, WWFs ecozones and many more. These aren't generally appropriate for a direct mapping of one bioregion to one of these geometries but if the geometries are small enough, they could be used as constituent pieces of a bioregion (for example, these five counties together make up a bioregion). One advantage is that data and information that we want to use to make sense of a bioregion may already be encoded into these polygon systems. However, almost all of these know polygon systems will be constrained by country and state/province boundaries, which gets in the way of the ecological aspect of mapping a bioregion. And some of these systems (zipcodes, parcel data, etc) will be clear and comprehensive for one part of the world but not whole continents. 

###### Grid systems
Grid systems in mapping tend to grapple with the challenge of applying a globally coherent set of pre-defined shapes to the earth, as a way to streamline the organization of data. They make all sorts of data comparsions and sorting easier, once the data has been mapped to the grid system. The two global grid systems I am familiar are S2 and H3. [S2](https://s2geometry.io/) was made by google and divides the world up into a hierarchial scheme of four-sided polygons that interlock over the whole world. Its great as a spatial index, meaning a way to quickly 'address' datasets that have geometries. It is not very appealing as a representation geometry; the four sided shapes distort in appearance, dependent on their location on the globe.

H3 came out of Uber, helping them track supply and demand for rides. In additional to the advantages of S2, it also provides a better representation geometry with its hexagon grid, along with more consistent relational dynamics between the grid elements. That consistency in relational dynamics makes it simpler to derive impact across the hexagons in a local area. Say if we wanted to apportion voting power by distance from an intervention, that would be very simple to calculate with this grid.

###### Point data
This option is more of a thought-experiment than a practical choice. If we represented a bioregion as a point at its notional center, we would do away with the issue of defining boundaries... because there would be no boundaries to define! Figuring out where that center is, membership and identity for these would be a constant nightmare, as would trying to represent data in this scheme. I would prefer to pass on this option.

### What data can we map to the base geometry and can we get it?
It would be incredible to inform our decisions about defining bioregions by having access to keystone species, habitat boundaries, watersheds, human patterns of movement and land-use, local inhabitants perspectives, ecological and climatic factors, etc etc... And each of these possible data sources would need to be 1) Found or created (!) 2) Ported to whatever geometry we settle on 3) analysed and integrated into whatever process is used to delineate bioregions 4) Updated as things inevitably change over time. On top of all that, the different datasets would ideally be global, or at least harmonized across global datasets.

Alas, going for both breadth and depth on all of these feels like a mind-boggling amount of work. With an infinite budget, it would probably still take a lot of human talent and time to get everything our hearts could desire. Consequently, some level of prioritization of data-sets and a periodic, iterative process of determining bioregions will serve us best, as we add more data and community input over time. For now, I will detail initial views and guesses on what data sets we could use and how easy (or hard) it will be to integrate it into a process.

###### Human population density & Human landscape management density
Population density is fairly easy to get as a data source, and while I would not factor it in bioregion boundaries, it is useful quick indicator of our impact in an ecology. It ought to be paired with datasets related to human landscape management; the distribution of our built environment ('towns and pastures' versus 'suburbs and roadways' could have the same human density but very different ecological impacts), distribution of agriculture, infrastructure and 'managed' landscapes. Getting all the different datasets that could inform human landscape management will vary in ease (especially across the globe) but are really handy for giving folks a read on what bioregional interventions might be transferable between different regions. These datasets will also be handy for tracking bioregional health over time, as we create different distributions of human impact on ecologies.

###### Watersheds
Watersheds should be fairly easy to source data-sets for, perhaps a little annoying to make consistent across the globe, and are key for determining impact in some categories of bioregional intervention (removal of a dam, waste water treatment, etc). Watersheds will have an impact on bioregional boundaries but it is a bit fuzzy to determine the cut-off vs continuation point for them. For example, the whole Mississippi basin crosses vast terrains and contains a diverse range of ecologies and peoples; It would be an unwieldly bioregion to coordinate for all matters. Better to have smaller bioregions that are more nimble, but that have a inter-bioregional coordination mechanism for watershed scale interventions.

###### Ease of movement
'Ease of movement', stemming from a military term I'm familiar with, 'lines of communication', is important for bioregions because the easier it is for humans, materials and flora and fauna to move through different areas, the more likely those areas make sense as being connected into a bioregion. Generating this dataset might be a little cumbersome, built up from how easy terrain is to traverse (open plains vs thick jungle), infrastructure like roads and railways (etc), and even human defined borders (this is where I'd prefer borders to influence bioregions for now). Not the highest priority dataset to compile but one that I think does significantly impact how ecosystems are shaped.

###### Climatic factors (marine influence, latitude, elevation, weather patterns)
Climatic factors deeply shape ecologies. The flora and fauna of a bioregion are ultimately all consequences of the climatic conditions of a place. Datasets that represent climatic conditions are typically very available, the tricky aspect will stem from how they are combined to understand bioregional boundaries. The Köppen climate classification system could represent an easy initial drop-in analysis to cover that 'tricky' integration question, as it provides a concise characterisation of the climatic conditions apparent in different places.

###### Flora and fauna habitation patterns
The flora and fauna of a region can be the most obvious identifying features of an area. From a long term local perspective of an area, there are usually one or two dozen trees, animals, plants, etc that define a region. From the outside perspective, it might be tricky to determine what are the key flora and flora, and also how that influences the boundaries of a bioregion. *Coppice Agroforesty* notes that the Society of American Foresters identified 145 different 'natural communities' of forest stands, using names of one to three dominant specices like "Hemlock-Sitka Spruce" or "Oak-Hickory". That might be a good dataset for this purpose but would need to be complimented by similar datasets for other regions of the world.

###### Minimum viable data set?
What is the least amount of work and data we can get away with while still providing a decent basis for the creation of bioregions? This is my current working set, as of July 2022.
- Human population density
- Koppen climate classification
- Built environment (proxy for human landscape management)
- Agricultural lands (proxy for human landscape management)
- Watersheds (depending on how easily their representation can be harmonized across continents)

To continue hammering home the point, these would of course need to be integrated into some process to actually generate bioregions.

### How ought it be shared?
Whatever mapping scheme we come up with, it has to be shared in order to serve any purpose. Ideally it would be open and free for non-commercial uses, and user and developer-friendly, to aid in adoption. As of July 2022, I am just going to note what else needs to be considered around getting a mapping scheme into use.

- Versioning/Publishing
- Editing/Updating (particularly as new data or new community inputs become available)
- Distribution; Making it available

I have a lot of uncollected thoughts about these topics but I think any deeper delving into them can wait for another time.

### What process do we use?
What sort of process do we use to take all of the above geometries, data and inputs to actually generate bioregions?

- How much of the process can be automated?
- How can we factor in community input?
- Is there a role for 'expert' stewardship/input?
- How do we handle different communities/stakeholders having different ideas about bioregion boundaries?
 
### What other systems and/or uses might be layered on top of a bioregional mapping scheme?
How might these choices help or hinder other processes layered on top of this system?

### Do we have the skill-sets, resources, access and time to achieve the scheme that is the outcome of answering these questions?

### How do we create bioregions that resonate with folks that live in that region?
- have to peel the question in two; those that get what a bioregion is and those that don't.
