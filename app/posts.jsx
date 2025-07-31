import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput, Alert, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import { StatusBar } from 'react-native-web';

export default function Posts() {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'João Silva',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      time: '2 horas atrás',
      text: 'Comecei a tomar creatina há 2 semanas e já estou sentindo diferença nos treinos! Recomendo muito.',
      likes: 24,
      liked: false,
      comments: 8,
      commentInput: '',
      showCommentInput: false,
      commentsList: [],
    },
    {
      id: 2,
      user: 'Maria Oliveira',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      time: '5 horas atrás',
      text: 'Alguém tem dicas de como melhorar a recuperação muscular? Estou pensando em usar BCAA.',
      likes: 16,
      liked: false,
      comments: 12,
      commentInput: '',
      showCommentInput: false,
      commentsList: [],
    },
    {
      id: 3,
      user: 'Carlos Santos',
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
      time: '1 dia atrás',
      text: 'Treino pesado todos os dias e a creatina tem sido essencial para manter minha energia. Super recomendo!',
      likes: 42,
      liked: false,
      comments: 5,
      commentInput: '',
      showCommentInput: false,
      commentsList: [],
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newPostText, setNewPostText] = useState('');

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
        };
      }
      return post;
    }));
  };

  const toggleCommentInput = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          showCommentInput: !post.showCommentInput,
        };
      }
      return post;
    }));
  };

  const handleCommentChange = (postId, text) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          commentInput: text,
        };
      }
      return post;
    }));
  };

  const handleSendComment = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId && post.commentInput.trim()) {
        const newComment = {
          id: Math.random().toString(),
          user: 'Você',
          text: post.commentInput,
          time: 'Agora',
        };
        return {
          ...post,
          commentInput: '',
          comments: post.comments + 1,
          showCommentInput: false,
          commentsList: [...post.commentsList, newComment],
        };
      }
      return post;
    }));
  };

  const handleCreatePost = () => {
    if (!newPostText.trim()) {
      Alert.alert('Erro', 'Digite algo para publicar!');
      return;
    }

    const newPost = {
      id: Math.max(...posts.map(p => p.id)) + 1,
      user: 'Você',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      time: 'Agora',
      text: newPostText,
      likes: 0,
      liked: false,
      comments: 0,
      commentInput: '',
      showCommentInput: false,
      commentsList: [],
    };

    setPosts([newPost, ...posts]);
    setNewPostText('');
    setModalVisible(false);
    Alert.alert('Sucesso', 'Post publicado com sucesso!');
  };

  return (
    <View style={styles.container}>
            <StatusBar
              barStyle="light-content"
              backgroundColor="#000"
              translucent={false}
              />
      <CustomHeader />
      <View style={styles.pageTitle}>
        <Text style={styles.pageTitleText}>Feed da Comunidade</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {posts.map(post => (
          <View key={post.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Image source={{ uri: post.avatar }} style={styles.avatar} />
              <View style={styles.userInfo}>
                <Text style={styles.cardTitle}>{post.user}</Text>
                <Text style={styles.timestamp}>{post.time}</Text>
              </View>
            </View>
            <Text style={styles.cardText}>{post.text}</Text>
            <View style={styles.cardFooter}>
              <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(post.id)}>
                <FontAwesome5
                  name="heart"
                  size={18}
                  color={post.liked ? '#FF0000' : '#a9a9a9'}
                  solid={post.liked}
                />
                <Text style={styles.actionText}>{post.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => toggleCommentInput(post.id)}>
                <FontAwesome5 name="comment" size={18} color="#11f51d" light />
                <Text style={styles.actionText}>{post.comments}</Text>
              </TouchableOpacity>
            </View>

            {post.commentsList.length > 0 && (
              <View style={styles.commentsContainer}>
                {post.commentsList.map(comment => (
                  <View key={comment.id} style={styles.comment}>
                    <View style={styles.commentInitialContainer}>
                      <Text style={styles.commentInitial}>
                        {comment.user.charAt(0).toUpperCase()}
                      </Text>
                    </View>
                    <View style={styles.commentContent}>
                      <Text style={styles.commentUser}>{comment.user}</Text>
                      <Text style={styles.commentText}>{comment.text}</Text>
                      <Text style={styles.commentTime}>{comment.time}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}

            {post.showCommentInput && (
              <View style={styles.commentInputContainer}>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Digite seu comentário..."
                  value={post.commentInput}
                  onChangeText={text => handleCommentChange(post.id, text)}
                  autoFocus
                />
                <TouchableOpacity style={styles.sendButton} onPress={() => handleSendComment(post.id)}>
                  <FontAwesome5 name="paper-plane" size={18} color="#11f51d" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Ionicons name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setNewPostText('');
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Criar Post</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setNewPostText('');
                }}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>
            <View style={styles.postInputContainer}>
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                style={styles.modalAvatar}
              />
              <Text style={styles.userName}>Você</Text>
            </View>
            <TextInput
              style={styles.postInput}
              placeholder="O que você quer compartilhar?"
              multiline
              numberOfLines={6}
              value={newPostText}
              onChangeText={setNewPostText}
              textAlignVertical="top"
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setModalVisible(false);
                  setNewPostText('');
                }}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.publishButton, !newPostText.trim() && styles.publishButtonDisabled]}
                onPress={handleCreatePost}
                disabled={!newPostText.trim()}
              >
                <Text style={styles.publishButtonText}>Publicar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  pageTitle: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  pageTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    padding: 16,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  timestamp: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  cardText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
    marginBottom: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },
  actionText: {
    marginLeft: 6,
    color: '#666',
    fontSize: 14,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    padding: 8,
  },
  commentsContainer: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  commentInitialContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  commentInitial: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  commentContent: {
    flex: 1,
  },
  commentUser: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  commentText: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  commentTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    zIndex: 999,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  postInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  postInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    minHeight: 120,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  publishButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    flex: 1,
    marginLeft: 10,
  },
  publishButtonDisabled: {
    backgroundColor: '#ccc',
  },
  publishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});