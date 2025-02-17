import { Pressable, Text, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from "@expo/vector-icons"


const Button = ({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  style,
  textStyle,
  ...props
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondary;
      case 'outline':
        return styles.outline;
      default:
        return styles.primary;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        getVariantStyle(),
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          {props.icon && <Ionicons name={props.icon} style={[
            styles.icon, 
            variant === 'outline' && { color: '#FF0000' }
          ]} />}
          <Text style={[
            styles.text, 
            textStyle,
            variant === 'outline' && { color: '#FF0000' }
          ]}>
            {title}
          </Text>
        </>
      )}
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  icon: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minWidth: 100,
  },
  primary: {
    backgroundColor: '#FF0000',
  },
  secondary: {
    backgroundColor: '#000000',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FF0000',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  disabled: {
    opacity: 0.6,
    backgroundColor: '#B71C1C',
  },
  icon: {
    marginRight: 8,
    color: 'white',
  },
});

export default Button;