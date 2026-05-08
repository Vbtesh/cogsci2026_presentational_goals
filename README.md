# Action understanding with presentational goals

This repository contains the code and data for the paper "Action understanding with presentational goals" by Victor Btesh, Sarah A. Wu, and Tobias Gerstenberg, published in Cognitive Science in 2026.

__Contents:__
- [Action understanding with presentational goals](#action-understanding-with-presentational-goals)
  - [Introduction](#introduction)
  - [Experiment](#experiment)
  - [Repository structure](#repository-structure)
  - [CRediT author statement](#credit-author-statement)

## Introduction

Humans balance many goals while navigating social interactions. We are motivated not only by what we want for ourselves, and what we want for others, but also by what we want others to think about us. Inferences about agents' personal and social goals have been formally captured using Bayesian inverse planning models. However, less is known about the mechanisms underlying our ability to infer presentational goals: an agent's desires over how another agent sees them. We introduce a novel paradigm which allows us to test joint inferences about social and presentational goals.
We propose an extension to inverse planning where agents derive additional utility from shifting others' beliefs about their social goals. Because the model places no constraint on the valence of presentational targets, it naturally captures cases where agents wish to appear prosocial or adversarial. Across a variety of scenarios, participants make systematic joint inferences about social goals, presentational goals, and presentational targets. Our computational model captures participants' inferences better than feature-based alternatives.


## Experiment

This study was preregistered at https://osf.io/2m9sv/overview 

You can try out the experiment [here](https://vbtesh.github.io/presentational_goals/exp1).

The image stimuli for the experiment can be found [here](https://github.com/vbtesh/presentational_goals/docs/exp1/images) and the vignettes can be found [here](https://github.com/vbtesh/presentational_goals/docs/exp1/vignettes/scenes.js).

## Repository structure 

```
├── code
│   └── exp1_analysis_cogsci.ipynb
├── data
│   └── exp1
│   └── exp1_models
│   └── pilot1
├── figures
├── docs
│   └── exp1
└── writeup
    └── cogsci2026
```

- `exp1_analysis_cogsci.ipynb`: contains all the code for analyzing data and generating figures which can be found in the `figures` folder.
- `data/exp1`: contains anonymized data from the first experiment.
  For each experiment condition, `participants.csv` contains demographic information and post-experiment feedback and comments, and `trials.csv` contains the response data.
- `data/exp1_models`: contains the cross-validated results for the computational model.
- `data/pilot1`: contains anonymized data from the pilot experiment.
- `docs`: contains the experiment code.

## CRediT author statement

| Term                       | Victor Btesh | Sarah A. Wu  | Tobias Gerstenberg |
|----------------------------|--------------|--------------|--------------------|
| Conceptualization          | x            | x            | x                  |
| Methodology                | x            | x            | x                  |
| Software                   | x            | x            |                    |
| Validation                 | x            |              | x                  |
| Formal analysis            | x            | x            |                    |
| Investigation              | x            | x            |                    |
| Resources                  |              |              |                    |
| Data Curation              | x            | x            |                    |
| Writing - Original Draft   | x            |              |                    |
| Writing - Review & Editing | x            | x            | x                  |
| Visualization              | x            |              | x                  |
| Supervision                |              |              | x                  |
| Project administration     | x            |              | x                  |
| Funding acquisition        |              |              | x                  |
