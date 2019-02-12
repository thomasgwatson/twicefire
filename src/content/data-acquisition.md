---
layout: post
title: "A generic mental model for geo-data acquisition"
author: Tom Watson
tags: []
image: img/unused/sun.jpg
date: "2019-02-19T23:46:37.121Z"
draft: false
---

I am going to dive into outlining a generic mental model for what organizations tend to do when they have geo-data acquisition needs. A model like this is useful for creating a common understanding for how organizations tend to deal with the challenges around acquiring geo-data.
<sub>_Epistemic status: very specific reflections on a niche domain I have spent a lot of time operating in._<sub/>

#### General model for geo-data acquisition
When seeking to describe a model for anything, a tension exists between simplifying the model down to the most essential aspects, and including nothing more. It is obviously important to detail what is in a model; less obviously, it is also critical to detail what is not included in a model or otherwise delegated to higher or lower scopes.

Based on my observations of geo-data acquisition practices in the Anglo-American (“Five Eye”) intelligence community, in Terravion, an aerial imagery start up, and working for the Capture System team in HERE, the most essential elements for the general model for geo-data acquisition are:
- Requirements
- Acquisition
- Feedback

![geo-data acquisition model](img/data_acq_model.png)

###### Requirements
_Requirements define what data/outcomes are needed._ The bulk of work around requirements stems from understanding the business problem that needs to be solved, expressing that as a singular requirement or a set of requirements, and framing those requirements in a way that can be easily passed to the acquisition part of the cycle. Typically this process also includes prioritization, basic cost analysis and a way to keep requestors up to date with the ongoing status of their requirements.

###### Acquisition
The two broadest categories of acquisition are 1) _getting the data from someone else_ 2) _collecting it yourself._ While there are operational differences between requesting and receiving data from an external source, versus operating one’s own collection platforms, they share a common lifecycle: requirements need to be translated into acquisition planning, and data needs to be furnished in an agreed-on format and schema. The data provider in either case ought to go through processes including:
- Checking whether they already have data to satisfy a requirement
- If collection is required, breaking down requirements into a plan of specific tasks for their collection platform to execute on.
- Collection operations
- Collection validation
- Data delivery
If data is externally sourced, these processes tend to be shielded from other actors in the rest of the cycle. If internally sourced, the implementation details of collection platform operation can leak out all through the overall cycle, if care is not taken to effectively encapsulate the collection platform.

###### Feedback
_Feedback is the process of matching the acquired data up to its originating requirements, and confirming whether the acquired data fulfills those requirements._  Often, the acquired data will undergo further processing and analysis after it has been received. Consequently, feedback may either be incremental or held up until all processing has been completed. The health or efficiency of the overall lifecycle is dependent on whether the feedback flowing back to the rest of the cycle is timely, concise and accurate.

![break](img/icon.jpg)

###### What is left out of this model?
Steps prior to defining requirements are left out. Figuring out what problem sets or market fit are important for an organization; this process is where requirements come from. However delving into that would be a distraction from the core cycle of the model. Similarly, steps after feedback beyond scope; how processing is done, how the data is served or archived, marketing to customers, etc. All important aspects to consider for an organization as a whole but distracting for our current focus.


> Readers who are familiar with data acquisition might be wondering about some key aspect of the acquisition cycle they are familiar with, and questioning why it is not included. What about ingestion or routing? Or task orchestration? Where is the campaign management? Data integrity/security/privacy? Or quality assurance?

These tend to be implementation details of the wider cycle. Depending on the scale of data acquisition in an organization, it makes sense to call out more specific steps and sub-processes as they are required. In the same way that routing, fleet management and other collection operations are sub-components of the overall theme of acquisition, quality assurance, ingestion, data integrity measures, etc, are ultimately all forms of feedback. It is not uncommon for different organizations or groups to use different names (campaign management, scope management, collection orchestration) for the same function (a process to ensure requirements are turned into instructions for acquisition platforms). This cross-labelling risk applies even to this model. I have tried to establish the most generic labels for separating the major conceptual parts of the cycle, with requirements, acquisition, and feedback. Perhaps more “intuitive” terms exist.
