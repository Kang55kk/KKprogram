import itchat
import pickle
import matplotlib.pyplot as plt 

itchat.login()  # 会自动弹出一个二维码，手机微信扫描授权网页版登录后方可爬取相关信息

my_friends = itchat.get_friends(update=True)[0:]    # 获取通讯录好友的信息，返回一个好友信息的字典

# 持久化保存数据，统计好友相关信息时无需再次扫码登录
with open('../data/my_friends.pickle', 'wb') as e:
    pickle.dump(my_friends, e)


def statistic_friends_sex(friends_dict):
    """
    该函数功能为实现 friends_dict 中性别统计
    """
    result = [0, 0, 0]
    for friend in friends_dict[1:]:
        # 好友列表第一个是自己，所以统计真正好友要从第二个开始
        sex = friend['Sex']
        if sex == 1:
            result[0] += 1
        elif sex == 2:
            result[1] += 1
        else:
            result[2] += 1

    return result

def sex_pie_chart(sex_num):
    """
    该函数功能为实现画出性别统计的饼图
    """
    labels = ['男', '女', '不明']
    colors = ['green', 'pink', 'yellow']
    #设置字体样式
    plt.rcParams['font.family']='sans-serif'
    plt.rcParams['font.sans-serif']=[u'SimHei']
    
    plt.pie(sex_num, colors=colors, labels=labels, autopct='%1.1f%%', pctdistance=0.8)
    plt.title(u"你的微信好友性别情况", bbox={'facecolor': '0.8', 'pad': 5})
    plt.show()
    
with open('../data/my_friends.pickle', 'rb') as e:
    my_friends = pickle.load(e)

statistic_result = statistic_friends_sex(my_friends)

print("男性好友人数：", statistic_result[0], "\n" +
        "女性好友人数：", statistic_result[1], "\n" +
        "不明性别好友：", statistic_result[2])

sex_pie_chart(statistic_result)
