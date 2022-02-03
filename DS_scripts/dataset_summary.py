#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Jan 23 04:23:22 2022

@author: xinhao
"""

#%% import pandas
# This is the convention used to import Pandas.
import pandas as pd
from collections import Counter
import matplotlib.pyplot as plt


#%% load data
# These commands load the survey data 
df = pd.read_csv("TM_result.csv")      # user data collected from Saba

df2= pd.read_csv("TM_result_2nd.csv")  # user data collected from Xinhao

#%% data feature

type_data = df.iloc[:,1:26]

type_data_2nd = df2.iloc[:,3:28]

#%% convert Xinhao's data to scores

def text_to_score(a):
     if a == "No, not at all":
         return 1
     elif a == "Mostly not":
         return 2
     elif a == "Mostly yes":
         return 3
     elif a == "Yes, definitely agree":
         return 4 


#%% data cleaning      

type_data_2nd = type_data_2nd.applymap(text_to_score)

#%% calculate the average score for each type (25 question OLD version)
# hooper        = (Q1 + Q4 + Q6 + Q15 + (5 - Q17) + (5 - Q20)) / 6 - 2.5
# Perfectionist = (Q2 + Q5 + Q7 + Q9 + Q16 + (5 - Q18)) / 6 - 2.5
# cliff_hanger  = (Q13 + Q21 + Q22 + Q23 + (5 - Q8)) / 5 - 2.5
# impulsive     = (Q3 + Q4 + Q15 + Q19 + (5 - Q10) + (5 - Q17)) / 6 - 2.5
# big_idea      = (Q11 + Q22 + Q24 + (5 - Q7)) / 4 - 2.5
# hyperfocus    = (Q7 + Q12 + Q14 + Q25 + (5 - Q1) + (5 - Q6)) / 6 - 2.5

avg_score = pd.DataFrame()

avg_score['hopper_score'] = (type_data.iloc[:,0] + type_data.iloc[:,3]  
    + type_data.iloc[:,5]  + type_data.iloc[:,14] + (5 - type_data.iloc[:,16]) 
    + (5 - type_data.iloc[:,19])) / 6 - 2.5

avg_score['perfectionist_score'] = (type_data.iloc[:,1] + type_data.iloc[:,4]  
    + type_data.iloc[:,6]  + type_data.iloc[:,8] + type_data.iloc[:,15] 
    + (5 - type_data.iloc[:,17])) / 6 - 2.5

avg_score['cliff_hanger_score'] = (type_data.iloc[:,12] + type_data.iloc[:,20]  
    + type_data.iloc[:,21]  + type_data.iloc[:,22] 
    + (5 - type_data.iloc[:,7])) / 5 - 2.5

avg_score['impulsive_score'] = (type_data.iloc[:,2] + type_data.iloc[:,3]  
    + type_data.iloc[:,14]  + type_data.iloc[:,18] + (5 - type_data.iloc[:,9]) 
    + (5 - type_data.iloc[:,16])) / 6 - 2.5

avg_score['big_idea_score'] = (type_data.iloc[:,10] + type_data.iloc[:,21]  
    + type_data.iloc[:,23] + (5 - type_data.iloc[:,6])) / 4 - 2.5

avg_score['hyperfocus_score'] = (type_data.iloc[:,6] + type_data.iloc[:,11]  
    + type_data.iloc[:,13]  + type_data.iloc[:,24] + (5 - type_data.iloc[:,0]) 
    + (5 - type_data.iloc[:,5])) / 6 - 2.5

#%% get the type name with maximal average score

avg_score['winner_type'] = avg_score.idxmax(axis=1)

TM_type_1 = list(avg_score['winner_type'][:])

#%% process the 2nd half of data

type_data = type_data_2nd

avg_score = pd.DataFrame()

avg_score['hopper_score'] = (type_data.iloc[:,0] + type_data.iloc[:,3]  
    + type_data.iloc[:,5]  + type_data.iloc[:,14] + (5 - type_data.iloc[:,16]) 
    + (5 - type_data.iloc[:,19])) / 6 - 2.5

avg_score['perfectionist_score'] = (type_data.iloc[:,1] + type_data.iloc[:,4]  
    + type_data.iloc[:,6]  + type_data.iloc[:,8] + type_data.iloc[:,15] 
    + (5 - type_data.iloc[:,17])) / 6 - 2.5

avg_score['cliff_hanger_score'] = (type_data.iloc[:,12] + type_data.iloc[:,20]  
    + type_data.iloc[:,21]  + type_data.iloc[:,22] 
    + (5 - type_data.iloc[:,7])) / 5 - 2.5

avg_score['impulsive_score'] = (type_data.iloc[:,2] + type_data.iloc[:,3]  
    + type_data.iloc[:,14]  + type_data.iloc[:,18] + (5 - type_data.iloc[:,9]) 
    + (5 - type_data.iloc[:,16])) / 6 - 2.5

avg_score['big_idea_score'] = (type_data.iloc[:,10] + type_data.iloc[:,21]  
    + type_data.iloc[:,23] + (5 - type_data.iloc[:,6])) / 4 - 2.5

avg_score['hyperfocus_score'] = (type_data.iloc[:,6] + type_data.iloc[:,11]  
    + type_data.iloc[:,13]  + type_data.iloc[:,24] + (5 - type_data.iloc[:,0]) 
    + (5 - type_data.iloc[:,5])) / 6 - 2.5

avg_score['winner_type'] = avg_score.idxmax(axis=1)

TM_type_2 = list(avg_score['winner_type'][:])

#%% combine two halves of dataset

TM_all = TM_type_1 + TM_type_2

#%% calculate the percentage of types in dataset

type_count = Counter(TM_all)
total = sum(type_count.values())
percent = {key: value/total for key, value in type_count.items()}

TM = list(percent.keys())
TM = [e[0:-6] for e in TM]
pct = list(percent.values())
pct = [e*100 for e in pct]
pct = [round(e, 1) for e in pct]
#pct = [e+"%" for e in pct]

#%% create DataFrame for pie chart

Daten = pd.DataFrame(pct, index=TM, columns=['type'])

# use the scatter function
plt.figure(figsize=(15,8))

# colorz = ['#B5DF00','#AD1FFF', '#BF1B00','#5FB1FF','#FFC93F']

plt.pie(pct,labels=TM,autopct='%1.1f%%',shadow=True,startangle=90)

#fig = plt.legend(title='time management types',loc=2)

plt.savefig('Time_management_percent.png')