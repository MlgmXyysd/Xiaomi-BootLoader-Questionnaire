import json
import os
import time
import re

def read_problems():
    # read problems.json
    with open('problems.json', 'r', encoding='utf-8') as f:
        problems = json.load(f)
    return problems

def read_today():
    # read all jsons in 'today' folder
    today_problems = []
    
    for filename in os.listdir('today'):
        with open(os.path.join('today', filename), 'r', encoding='utf-8') as f:
            today_problems.append(json.load(f))
    return today_problems

def cleanup_string(string):
    # remove <span> tags by using regex
    string = re.sub(r'<.*?span.*?>', '', string)
    string = string.strip()
    return string

def levenshtein_distance(s1, s2):
    # calculate levenshtein distance between two strings
    # https://en.wikipedia.org/wiki/Levenshtein_distance
    if len(s1) < len(s2):
        return levenshtein_distance(s2, s1)
    if len(s2) == 0:
        return len(s1)
    previous_row = range(len(s2) + 1)
    for i, c1 in enumerate(s1):
        current_row = [i + 1]
        for j, c2 in enumerate(s2):
            insertions = previous_row[j + 1] + 1 
            deletions = current_row[j] + 1       
            substitutions = previous_row[j] + (c1 != c2)
            current_row.append(min(insertions, deletions, substitutions))
        previous_row = current_row
    return previous_row[-1]

def update_problems(problems, today_problems):
    current_date = time.strftime("%Y-%m-%d", time.localtime())
    problems['latest'] = {
        'date': current_date,
        'problems': []
    }
    problem_list = problems['problems']
    latest_problems = problems['latest']['problems']

    # update problems.json
    for today_problem in today_problems:
        if today_problem['data']['content'] is None:
            continue
        problem_content = cleanup_string(today_problem['data']['content'])
        note = cleanup_string(today_problem['data']['note'])

        # find existing problem
        problem = None
        for p in problem_list:
            if p['content'] == problem_content:
                problem = p
                break
        if problem == None:
            # create new problem
            problem = {
                'id': len(problem_list) + 1,
                'content': problem_content,
                'note': note if note != '' else None,
                "type": "single" if today_problem['data']['type'] == 1 else "upload_file" if today_problem['data']['type'] == 12 else "multiple",
                'options': []
            }
            problem_list.append(problem)
        
        # add to latest_problems
        latest_problem = {
            'id': problem['id'],
            'index': today_problem['data']['index'],
            'random_options': today_problem['data']['config']['isRandom'] == 1,
            'options': []
        }
        latest_problems.append(latest_problem)

        # add options
        for option in today_problem['data']['choice']:
            option_content = cleanup_string(option['content'])

            # find existing option
            option = None
            for o in problem['options']:
                if o['content'] == option_content:
                    option = o
                    break
            if option == None:
                # create new option
                print('New option in problem "' + problem_content + '": ' + option_content)
                
                # find nearest option in other problems
                nearest_option = None
                nearest_option_problem = None
                old_distance_option = 10
                for p in problem_list:
                    for o in p['options']:
                        distance = levenshtein_distance(o['content'], option_content)
                        if distance < old_distance_option:
                            old_distance_option = distance
                            nearest_option = o
                            nearest_option_problem = p
                
                if nearest_option != None:
                    print('Nearest option: ' + nearest_option['content'])
                    print('\tProblem: ' + nearest_option_problem['content'])
                    print('\tCorrect: ' + str(nearest_option['correct']))
                    print('\tExplanation: ' + nearest_option['explanation'])
    
                correct = input("该选项是否应选中？(y/n): ")
                explanation = input("该选项的解释：")
                option = {
                    'id': len(problem['options']) + 1,
                    'content': option_content,
                    'correct': True if correct == 'y' else False,
                    'explanation': explanation
                }
                problem['options'].append(option)

            latest_problem['options'].append(option['id'])

        latest_problems.sort(key=lambda x: x['index'])

def write_problems(problems):
    # write problems.json
    with open('problems.json', 'w', encoding='utf-8') as f:
        json.dump(problems, f, ensure_ascii=False, indent=2)
    
def main():
    problems = read_problems()
    today_problems = read_today()
    update_problems(problems, today_problems)
    write_problems(problems)

if __name__ == '__main__':
    main()
